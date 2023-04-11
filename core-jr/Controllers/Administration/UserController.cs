using core_jr.Data;
using core_jr.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace core_jr.Controllers.Administration
{
    public class UserController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly AppDbContext _context;
        public UserController(UserManager<IdentityUser> userManager, AppDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var users = await _context.AppUser.ToListAsync();
            return PartialView("~/Views/User/UserTable.cshtml", users);
        }

        [HttpGet]
        public IActionResult CreateUser()
        {
            return PartialView("~/Views/User/FormCreateUser.cshtml");
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserModel dataUserIn)
        {
            if (ModelState.IsValid)
            {
                DateTime registDate = DateTime.Now;
                var user = new AppUser
                {
                    UserName = dataUserIn.Email,
                    Email = dataUserIn.Email,
                    Name = dataUserIn.Name,
                    FirstName = dataUserIn.FirstName,
                    LastName = dataUserIn.LastName,
                    RegistrationDate = registDate,
                };
                var existUserName = await _context.Users.Where(x => x.UserName == dataUserIn.Email).FirstOrDefaultAsync();
                if (existUserName != null)
                {
                    return Json(new { result = Message.info, msg = "El email ya se encuentra registrado" });
                }

                var result = await _userManager.CreateAsync(user, "!Asdf123");
                if (result.Succeeded)
                {
                    return Json(new { result = Message.success, msg = "Usuario creado correctamente" });
                }
            }
            return Json(new { result = Message.warning, msg = "Hubo un error al intentar crear usuario" });
        }

        [HttpGet]
        public IActionResult AddUserRol(string Id)
        {
            var user = _context.AppUser.Where(x => x.Id == Id).FirstOrDefault();
            if (user == null)
            {
                return NotFound();
            }
            ViewBag.Id = Id;
            ViewBag.UserName = user.UserName;
            ViewBag.Name = user.Name + " " + user.FirstName + " " + user.LastName;
            var roles = _context.Roles.ToList();
            var userRoles = _context.UserRoles.Where(x => x.UserId == Id).ToList();

            List<ListCheckBox> listcheck = new();
            foreach (var item in roles)
            {
                var existe = userRoles.Where(x => x.RoleId == item.Id).FirstOrDefault();
                listcheck.Add(new ListCheckBox
                {
                    Name = item.Name,
                    Value = item.Id,
                    Property = existe != null ? "checked" : "",
                }
                );
            }
            return PartialView("~/Views/User/UserRolView.cshtml", listcheck.OrderBy(x => x.Name));
        }

        [HttpPost]
        public async Task<IActionResult> AddUserRol(FormAddUserRol valuesIn)
        {
            var user = _context.Users.Where(x => x.Id == valuesIn.UserId).FirstOrDefault();
            if (user == null)
            {
                return NotFound();
            }
            var roles = _context.Roles.ToList();
            var rolesUser = _context.UserRoles.Where(x => x.UserId == valuesIn.UserId).ToList(); //count
            List<string> listRolesIn = valuesIn.Values;   //null

            //the user has no roles and has submitted the empty form
            if (rolesUser.Count == 0 && listRolesIn == null)
            {
                return Json(new { result = 3, msg = "No se ha agregado ningun rol" });
            }

            //add roles
            if (rolesUser.Count == 0 && listRolesIn != null)
            {
                foreach (var item in listRolesIn)
                {
                    var nameRol =await _context.Roles.Where(x => x.Id == item).Select(x => x.Name).FirstOrDefaultAsync();
                    await _userManager.AddToRoleAsync(user, nameRol);
                    _context.SaveChanges();
                }
                return Json(new { result = 1, msg = "Roles Agregados correctamente" });
            }

            //if the list "listRolesIn" is empty, delete the roles
            if (rolesUser.Count > 0 && listRolesIn == null)
            {
                foreach (var item in rolesUser)
                {
                    await _userManager.RemoveFromRoleAsync(user, roles.Where(x => x.Id == item.RoleId).Select(x => x.Name).FirstOrDefault());
                }
                return Json(new { result = 1, msg = "Se han eliminado los roles del usuario" });
            }

            //Delete the current roles and put the ones that come in the list "listRolesIn"
            if (rolesUser.Count > 0 && listRolesIn != null)
            {
                foreach (var item in rolesUser)
                {
                    await _userManager.RemoveFromRoleAsync(user, roles.Where(x => x.Id == item.RoleId).Select(x => x.Name).FirstOrDefault());
                }
                foreach (var item in listRolesIn)
                {
                    var nameRol = await _context.Roles.Where(x => x.Id == item).Select(x => x.Name).FirstOrDefaultAsync();
                    await _userManager.AddToRoleAsync(user,nameRol);
                    _context.SaveChanges();
                }
            }
            return Json(new { result = 1, msg = "Roles Agregados correctamente" });
        }

        [HttpPost]
        public IActionResult ChangeStatusAccount(string Id)
        {
            var user = _context.Users.Where(x => x.Id == Id).FirstOrDefault();
            if (user == null)
            {
                return Json(new { icon = "info", title = "Administración usuarios", msg = "El usuario no existe!" });
            }

            if (user.LockoutEnd != null && user.LockoutEnd > DateTime.Now)
            {
                //The user is blocked
                user.LockoutEnd = DateTime.Now;
                _context.SaveChanges();
                return Json(new { icon = "success", title = "Administración usuarios", msg = "Usuario desbloqueado correctamente" });
            }
            else
            {
                //the user is active
                user.LockoutEnd = DateTime.Now.AddYears(1);
                _context.SaveChanges();
                return Json(new { icon = "success", title = "Administración usuarios", msg = "Usuario bloqueado correctamente" });
            }
        }

        [HttpPost]
        public async Task<IActionResult> ResetPassword(string Id)
        {
            var user = await _context.AppUser.FindAsync(Id);

            if (user == null)
            {
                return Json(new { icon = "info", title = "Administración usuarios", msg = "El usuario no existe!" });
            }
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            var result = await _userManager.ResetPasswordAsync(user, token, "!Asdf123");
            if (result.Succeeded)
            {
                return Json(new { icon = "success", title = "Administración usuarios", msg = "El password ha sido cambiado" });
            }
            else
            {
                return Json(new { icon = "error", title = "Administración usuarios", msg = "Error al cambiar el password" });
            }
        }

        [HttpPost]
        public IActionResult DeleteAccount(string Id)
        {
            var userDb = _context.Users.FirstOrDefault(u => u.Id == Id);
            if (userDb == null)
            {
                return NotFound();
            }

            _context.Users.Remove(userDb);
            _context.SaveChanges();
            return Json(new { icon = "success", title = "Administración usuarios", msg = "La cuenta ha sido eliminada" });
        }

        [HttpPost]
        public IActionResult EditProfile(string Id)
        {
            if (Id == null)
            {
                return NotFound();
            }
            var userDb = _context.AppUser.Find(Id);
            if (userDb == null)
            {
                return NotFound();
            }
            return View("~/Views/User/EditProfileView.cshtml", userDb);
        }
        [HttpPost]
        public async Task<IActionResult> UpdateProfile(AppUser userIn)
        {
            var user = await _context.AppUser.FindAsync(userIn.Id);
            if (user == null)
            {
                return NotFound();
            }
            user.Name = userIn.Name;
            user.FirstName = userIn.FirstName;
            user.LastName = userIn.LastName;
            user.Email = userIn.Email;
            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                return Json(new { icon = "success", title = "", msg = "Datos actualizados" });
            }

            return Json(new { icon = "error", title = "", msg = "Error al actualizar los datos" });
        }

        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangePasswordModel dataIn)
        {
            var user = await _context.AppUser.FindAsync(dataIn.Id);
            if (user == null)
            {
                return NotFound();
            }
            var token=await _userManager.GeneratePasswordResetTokenAsync(user);
            var result = await _userManager.ResetPasswordAsync(user, token, dataIn.Password);
            if (result.Succeeded)
            {
                return Json(new { icon = "success", title = "", msg = "Contraseña actualizada" });
            }
            return Json(new { icon = "error", title = "", msg = "Error al actualizar la contraseña" });
        }

    }
}
