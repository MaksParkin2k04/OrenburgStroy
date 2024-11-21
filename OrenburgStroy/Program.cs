using System.Text.Encodings.Web;
using System.Text.Unicode;
using Microsoft.EntityFrameworkCore;
using OrenburgStroy.Data;
using OrenburgStroy.Model;

namespace OrenburgStroy {
    public class Program {
        public static async Task Main(string[] args) {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.BasicLatin, UnicodeRanges.Cyrillic }));

            // �������� ������ ����������� �� ����������������� �����
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("������ ����������� 'DefaultConnection' �� �������.");
            // ������������ �������� ������
            builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connectionString));

            // ������������ �����������
            builder.Services.AddScoped<IRepository, DataRepository>();

            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            //// ������������� ���� ������
            //using (IServiceScope scope = app.Services.CreateScope()) {
            //    ApplicationContext context = scope.ServiceProvider.GetRequiredService<ApplicationContext>();
            //    await Data.Initialization.DatabaseInitializer.InitializeAsync(context);
            //}

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment()) {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.MapGet("/api/", () => new { Title = "���������� React App" });
            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
