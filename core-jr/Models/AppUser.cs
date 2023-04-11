using Microsoft.AspNetCore.Identity;

namespace core_jr.Models
{
    public class AppUser:IdentityUser
    {
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Url { get; set; }
        public string TypeMime { get; set; }
        public DateTime RegistrationDate { get; set; }
    }
}
