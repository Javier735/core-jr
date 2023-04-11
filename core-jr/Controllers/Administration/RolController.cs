using core_jr.Data;
using core_jr.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace core_jr.Controllers.Administration
{
    public class RolController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly AppDbContext _context;
        public RolController(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, AppDbContext context)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
        }
          
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var roles = await _context.AppRol.ToListAsync();
            return PartialView("~/Views/Rol/RolTable.cshtml", roles);
        }

        [HttpGet]
        public IActionResult CreateEditRol(string Id)
        {
            //view create
            if (Id == "0")
            {
                AppRol rol = new();
                return PartialView("~/Views/Rol/FormRol.cshtml", rol);
            }
            //view edit
            var rolBd = _context.Roles.FirstOrDefault(r => r.Id == Id);
            return PartialView("~/Views/Rol/FormRol.cshtml", rolBd);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEditRol(AppRol rolIn)
        {
            var rolBd =  _context.AppRol.Where(x => x.Id == rolIn.Id).FirstOrDefault();

            if (rolBd!=null)
            {
                //edit            
                if (rolBd==null)
                {
                    return NotFound();
                }
                if (!await _roleManager.RoleExistsAsync(rolIn.Name))
                {
                   rolBd.Name = rolIn.Name.Trim();
                }
                rolBd.Description = rolIn.Description.Trim();
                rolBd.NormalizedName = rolIn.Name.Trim().ToUpper();
                var resultado = await _roleManager.UpdateAsync(rolBd);
                return Json(new { result = 1, msg = "Rol editado correctamente" });
            }

            //create
            if (await _roleManager.RoleExistsAsync(rolIn.Name))
            {
                return Json(new { result = Message.info, msg = "El nombre del rol ya existe" });
            }
            var rol = new AppRol { Name =rolIn.Name.Trim(), Description = rolIn.Description.Trim() };
            await _roleManager.CreateAsync(rol);
            return Json(new { result = Message.success, msg = "Rol creado correctamente" });
        }

        [HttpPost]
        public async Task<IActionResult> DeleteRol(string Id)
        {
            var rolBd = _context.Roles.FirstOrDefault(r => r.Id == Id);
            if (rolBd == null)
            {
                return Json(new { icon = "info", title = "Administración Roles", msg = "El rol no existe!" });
            }

            var usersWithRols = _context.UserRoles.Where(u => u.RoleId == Id).Count();
            if (usersWithRols > 0)
            {
                return Json(new { icon = "info", title = "Administración Roles", msg = "El rol esta asignado a un(s) usuario(s), no se puede borrar!" });
            }

            await _roleManager.DeleteAsync(rolBd);
            return Json(new { icon = "success", title = "Administración Roles", msg = "El rol ha sido borrado"});

        }
    }
}
