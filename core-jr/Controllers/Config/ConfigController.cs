using core_jr.Controllers.Patients;
using core_jr.Data;
using core_jr.Helpers;
using core_jr.Models;
using core_jr.Providers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace core_jr.Controllers.Config
{
    public class ConfigController : Controller
    {
        private readonly AppDbContext _context;
        private readonly ILogger<ConfigController> _logger;
		private readonly UploadfilesHelper _helperUpload;
		private readonly PathProvider _pathProvider;
		public ConfigController(AppDbContext context, IWebHostEnvironment env, ILogger<ConfigController> logger, UploadfilesHelper helperUpload, PathProvider pathProvider)
        {
            _context = context;
            _logger = logger;
			_helperUpload = helperUpload;
			_pathProvider = pathProvider;
		}
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult ThemeStyle()
        {
			return PartialView("~/Views/Config/ThemeStyle/ThemeStyle.cshtml");
		}

        [HttpGet]
        public IActionResult BusinessData(int BusinessDataId=0)             
        {
            BusinessData businessData = _context.BusinessData.FirstOrDefault();
            BusinessData businessModel = new();
            if (businessData!=null)
            {
                businessModel = businessData;
            }
			return PartialView("~/Views/Config/BusinessData/BusinessData.cshtml",businessModel);
		}
        [HttpPost]
        public async Task<IActionResult> SaveBusinessData(BusinessDataDto dataBDIn)
        {
            try
            {
				string routeImg = null;
				string filePath = "";
				string ImageName = "";
				string directory = "Img/CompanyLogo/";
				
				if (dataBDIn.BusinessDataId==0)
                {
                    BusinessData businessDataCreate = new();
					if (dataBDIn.CompanyLogoFile != null)
					{
						ImageName =Guid.NewGuid().ToString()+ dataBDIn.CompanyLogoFile.FileName;
						filePath = await _helperUpload.UploadFilesAsync(dataBDIn.CompanyLogoFile, ImageName, Folders.CompanyLogo);
						if (filePath != null)
						{
							routeImg = directory + ImageName;
						}
					}
					businessDataCreate.CompanyName = dataBDIn.CompanyName;
					businessDataCreate.CompanyLogoPath = routeImg;
					businessDataCreate.CompanyAddress = dataBDIn.CompanyAddress;
					businessDataCreate.Website = dataBDIn.Website;
					businessDataCreate.Email = dataBDIn.Email;
					businessDataCreate.CompanyPhone = dataBDIn.CompanyPhone;
					businessDataCreate.ReturnPolicy = dataBDIn.ReturnPolicy;
					businessDataCreate.CompanyLogo = ImageName;
					_context.Add(businessDataCreate);
					await _context.SaveChangesAsync();
					return Json(new { icon = "success", title = "Información", msg = "Registro guardado!" });
				}
				//Edit
				BusinessData businessData = _context.BusinessData.FirstOrDefault();
				if (businessData.CompanyLogoPath!=null && dataBDIn.CompanyLogoFile!=null)
				{
					filePath = _pathProvider.MapPath(businessData.CompanyLogo, Folders.CompanyLogo);
					//Delete picture 
					System.IO.File.Delete(filePath); 
					//upload new picture
					ImageName = Guid.NewGuid().ToString() + dataBDIn.CompanyLogoFile.FileName; 
					filePath = await _helperUpload.UploadFilesAsync(dataBDIn.CompanyLogoFile, ImageName, Folders.CompanyLogo);
					if (filePath != null)
					{
						routeImg = directory + ImageName;
					}
				}
				if (businessData.CompanyLogoPath == null && dataBDIn.CompanyLogoFile != null)
				{
					//Upload new picture
					ImageName = Guid.NewGuid().ToString() + dataBDIn.CompanyLogoFile.FileName;
					filePath = await _helperUpload.UploadFilesAsync(dataBDIn.CompanyLogoFile, ImageName, Folders.CompanyLogo);
					if (filePath != null)
					{
						routeImg = directory + ImageName;
					}
				}
				businessData.CompanyName = dataBDIn.CompanyName;
				businessData.CompanyLogoPath = routeImg!=null?routeImg:businessData.CompanyLogoPath;
				businessData.CompanyLogo = ImageName.Length>0?ImageName:businessData.CompanyLogo;
				businessData.CompanyAddress = dataBDIn.CompanyAddress;
				businessData.Website = dataBDIn.Website;
				businessData.Email = dataBDIn.Email;
				businessData.CompanyPhone = dataBDIn.CompanyPhone;
				businessData.ReturnPolicy = dataBDIn.ReturnPolicy;
				_context.Entry(businessData).State = EntityState.Modified;
				_context.SaveChanges();
				return Json(new { icon = "success", title = "Información", msg = "Registro actualizado!" });
			}
            catch(Exception e)
            {
				_logger.LogError("Configuración",e.Message);
				return Json(new { icon = "error", title = "Informacion", msg = "Hubo un problema al guardar el registro!" });
			}          	
		}
    }
}
