using System.ComponentModel.DataAnnotations;

namespace core_jr.Models
{
	public class BusinessData
	{
		[Key]
		public int BusinessDataId { get; set; }		
		public string CompanyName { get; set; }
		public string CompanyLogoPath { get; set; }
		public string CompanyLogo { get; set; }
		public string CompanyAddress { get; set; }
		public string Website { get; set; }
		public string Email { get; set; }
		public int CompanyPhone { get; set; }
		public string ReturnPolicy { get; set; }
	}

	public class BusinessDataDto
	{		
		public int BusinessDataId { get; set; }		
		public string CompanyName { get; set; }
		public IFormFile CompanyLogoFile { get; set; }
		public string CompanyAddress { get; set; }
		public string Website { get; set; }
		public string Email { get; set; }
		public int CompanyPhone { get; set; }
		public string ReturnPolicy { get; set; }
		public string CompanyLogo { get; set; }
	}	
}
