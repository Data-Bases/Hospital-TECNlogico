using Hospital_TECNologico.Models.Interfaces;
using Hospital_TECNologico.Repositories.Interfaces;
using Hospital_TECNológico_Backend.Dtos;
using Hospital_TECNológico_Backend.Models;
using Hospital_TECNológico_Backend.Repositories;
using Microsoft.AspNetCore.Identity;
using NUnit.Util;

namespace Hospital_TECNologico
{
    public class Startup
    {
        public IConfiguration configRoot
        {
            get;
        }
        public Startup(IConfiguration configuration)
        {
            configRoot = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddScoped<IPatientModel, PatientModel>();
            services.AddScoped<IPatientRepository, PatientRepository>();
        }
        public void Configure(WebApplication app, IWebHostEnvironment env)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
