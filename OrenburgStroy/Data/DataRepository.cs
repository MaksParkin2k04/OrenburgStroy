using Microsoft.EntityFrameworkCore;
using OrenburgStroy.Model;

namespace OrenburgStroy.Data {
    public class DataRepository : IRepository {

        public DataRepository(ApplicationContext context) {
            this.context = context;
        }

        private readonly ApplicationContext context;

        public async Task<IEnumerable<City>?> GetCities() {
            return await context.Cities.AsNoTracking().ToArrayAsync();
        }

        public async Task<City?> GetCity(string aliasCity) {
            return await context.Cities.AsNoTracking().Include(c => c.Projects).ThenInclude(p => p.Images).FirstOrDefaultAsync(c => c.Alias == aliasCity);
        }
    }
}
