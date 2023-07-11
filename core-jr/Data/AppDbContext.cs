using core_jr.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace core_jr.Data
{
    public class AppDbContext:IdentityDbContext
    {
        public AppDbContext(DbContextOptions options):base(options)
        {
                
        }
        //add models
        public DbSet<AppUser> AppUser { get; set; }
        public DbSet<AppRol> AppRol { get; set; }
		public DbSet<BusinessData> BusinessData { get; set; }
	}
}
