using Microsoft.EntityFrameworkCore;
using OrenburgStroy.Model;

namespace OrenburgStroy.Data {
    public class ApplicationContext : DbContext {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        public DbSet<City> Cities { get; private set; }
        public DbSet<Project> Projects { get; private set; }
        public DbSet<ImageProject> ImageProjects { get; private set; }
    }
}
