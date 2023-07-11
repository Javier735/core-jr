using core_jr.Providers;

namespace core_jr.Helpers
{
	public class UploadfilesHelper
	{
		private readonly PathProvider _pathProvider;
		public UploadfilesHelper(PathProvider pathProvider)
		{
			_pathProvider = pathProvider;
		}
		public async Task<String> UploadFilesAsync(IFormFile formFile, string nombreImagen, Folders folder)
		{
			string path = _pathProvider.MapPath(nombreImagen, folder);

			using (Stream stream = new FileStream(path, FileMode.Create))
			{
				await formFile.CopyToAsync(stream);
			}
			return path;
		}
	}
}
