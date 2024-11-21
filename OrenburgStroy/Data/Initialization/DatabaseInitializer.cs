using OrenburgStroy.Model;
using System.Text.Json;

namespace OrenburgStroy.Data.Initialization {
    public class DatabaseInitializer {

        public static async Task InitializeAsync(ApplicationContext context) {

            // Удаляем базу данных
            await context.Database.EnsureDeletedAsync();

            // Создаем базу данных
            if (await context.Database.EnsureCreatedAsync()) {

                UpdateFromJsonData(context);
                await context.SaveChangesAsync();
            }
        }

        private static void UpdateFromJsonData(ApplicationContext context) {
            string json = File.ReadAllText("Data/Initialization/DATA.JSON");
            CityDto[]? cities = JsonSerializer.Deserialize<CityDto[]>(json);

            foreach (CityDto cityDto in cities ?? Enumerable.Empty<CityDto>()) {
                Project[] projects = cityDto.Projects.Select(p => Project.Create(p.Alias, p.Name, p.Description, p.Images.Select(i => ImageProject.Create(i.Path, i.Alt)))).ToArray();
                context.Cities.Add(City.Create(cityDto.Alias, cityDto.Name, projects));
            }
        }
    }
}
