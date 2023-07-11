namespace core_jr.Providers
{
	public enum Folders
	{
		Uploads = 0, ImagesProfile = 1, Documents = 2, Temp = 3, CompanyLogo=4
	}
	public class PathProvider
	{
		private readonly IWebHostEnvironment _hostEnvironment;
		public PathProvider(IWebHostEnvironment hostEnvironment)
		{
			_hostEnvironment = hostEnvironment;
		}
		public string MapPath(string fileName, Folders folder)
		{
			string carpeta = "";

			if (folder == Folders.Uploads)
			{
				carpeta = "uploads";
			}
			else if (folder == Folders.ImagesProfile)
			{
				carpeta = "imagesprofile";
			}
			else if (folder == Folders.Documents)
			{
				carpeta = "documents";
			}
			else if (folder == Folders.CompanyLogo)
			{
				carpeta = "Img/CompanyLogo";
			}


			string path = Path.Combine(_hostEnvironment.WebRootPath, carpeta, fileName);

			if (folder == Folders.Temp)
			{
				path = Path.Combine(Path.GetTempPath(), fileName);
			}

			return path;
		}
	}
}
