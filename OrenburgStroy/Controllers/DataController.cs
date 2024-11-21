using Microsoft.AspNetCore.Mvc;
using OrenburgStroy.Model;

namespace OrenburgStroy.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase {

        public DataController(IRepository repository) {
            this.repository = repository;
        }

        private readonly IRepository repository;

        [HttpGet("/api/cities")]
        public async Task<IEnumerable<City>?> GetCities() {
            return await repository.GetCities();
        }

        [HttpGet("/api/{aliasCity}")]
        public async Task<City?> GetCity(string aliasCity) {
            return await repository.GetCity(aliasCity);
        }
    }
}
