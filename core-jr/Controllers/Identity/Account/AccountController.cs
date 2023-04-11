using core_jr.Data;
using core_jr.Models;
using core_jr.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace core_jr.Controllers.Identity.Account
{
    public class AccountController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly AppDbContext _context;
        private readonly MailService _mail;
        public AccountController(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, AppDbContext context, SignInManager<IdentityUser> signInManager, MailService mail)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
            _signInManager = signInManager;
            _mail = mail;
        }


        [HttpGet]
        public IActionResult Index()
        {          
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Register()
        {
            //create admin rol
            if (!await _roleManager.RoleExistsAsync("Administrador"))
            {
                var rol = new AppRol {Name="Administrador", Description="Administrador general del sistema" };
                await _roleManager.CreateAsync(rol);
            }

            //create registered rol
            if (!await _roleManager.RoleExistsAsync("Registrado"))
            {
                var rol = new AppRol { Name = "Registrado", Description = "Rol general básico" };
                await _roleManager.CreateAsync(rol);
            }
            //create read rol
            if (!await _roleManager.RoleExistsAsync("Lectura"))
            {
                var rol = new AppRol { Name = "Lectura", Description = "Rol de solo lectura" };
                await _roleManager.CreateAsync(rol);
            }


            RegisterModel register = new();
            //_mail.SendEmailOutlook();
            return View(register);
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterModel registerIn)
        {
            if (ModelState.IsValid)
            {
                DateTime registDate = DateTime.Now;
                var user = new AppUser
                {
                    UserName = registerIn.Email,
                    Email = registerIn.Email,
                    Name = registerIn.Name,
                    FirstName = registerIn.FirstName,
                    LastName = registerIn.LastName,
                    RegistrationDate = registDate,
                };
                var result = await _userManager.CreateAsync(user, registerIn.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return RedirectToAction("Index", "Home");
                }
                ValidationErrors(result);
            }
            return View(registerIn);
        }

        [HttpGet]
        public IActionResult Login()
        {
            LoginModel login = new();
            return View(login);
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginModel LoginIn)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(LoginIn.Email, LoginIn.Password, LoginIn.RememberMe, lockoutOnFailure: true);
                if (result.Succeeded)
                {
                    return RedirectToAction("Index", "Home");
                }
                if (result.IsLockedOut)
                {
                    ModelState.AddModelError(String.Empty, "Usuario bloqueado");
                    return View(LoginIn);
                }
                else
                {
                    ModelState.AddModelError(String.Empty, "Acceso Inválido");
                    return View(LoginIn);
                }
            }
            return View(LoginIn);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction(nameof(AccountController.Login), "Account");
        }        

        private void ValidationErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(String.Empty, error.Description);
            }
        }
             
    }
}
