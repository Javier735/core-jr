using Microsoft.AspNetCore.Identity;

namespace core_jr.Models
{
    public class AppRol:IdentityRole
    {
        public string Description { get; set; }
    }
}
