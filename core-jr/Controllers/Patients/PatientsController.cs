using core_jr.Data;
using Microsoft.AspNetCore.Mvc;

namespace core_jr.Controllers.Patients
{
    public class PatientsController : Controller
    {
        private readonly AppDbContext _context;     
        private readonly ILogger<PatientsController> _logger;
        public PatientsController(AppDbContext context, IWebHostEnvironment env, ILogger<PatientsController> logger)
        {
            _context = context;           
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
