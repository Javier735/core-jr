using Microsoft.AspNetCore.Mvc;

namespace core_jr.Controllers.Config
{
    public class ConfigController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
