using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore; 
using Socialize_API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens; 

namespace Socialize_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SocializeContext>( 
                x => x.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer")) 
            ); 
            services.AddControllers();
            services.AddCors();
            // services.AddCors(options =>
            // {
            //     options.AddPolicy("Policy1", builder => {
            //         builder.WithOrigins("http://localhost:3000/")
            //         .WithMethods("POST", "GET", "PUT", "DELETE")
            //         .WithHeaders(HeaderNames.ContentType);
            //     });
            // });

            //////////////////////////////////////// 
            // Autenticação 
                var key = System.Text.Encoding.ASCII.GetBytes(Settings.Secret); //Encripitando a chave Secret
                services.AddAuthentication(x =>           //Método para adicionar autenticação
                { 
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                }) 
                .AddJwtBearer(x =>  // Método para definir as configurações e funcionamento dos tokens
                { 
                    x.RequireHttpsMetadata = false; 
                    x.SaveToken = true; 
                    x.TokenValidationParameters = new TokenValidationParameters 
                    { 
                        ValidateIssuerSigningKey = true, 
                        IssuerSigningKey = new SymmetricSecurityKey(key), 
                        ValidateIssuer = false, 
                        ValidateAudience = false 
                    }; 
                }); 
            //////////////////////////////////////////

            // Configurando Autorizações
            services.AddAuthorization(options => 
            { 
                options.AddPolicy("user", policy => policy.RequireClaim("Socialize", "user")); 
                options.AddPolicy("admin", policy => policy.RequireClaim("Socialize", "admin")); 
            }); 
            ////////////////////////////
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            // Adicionando o serviço Cors para contornar o problema de ter 2 servidores (Asp.net e ReactJS):
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            // if (env.IsDevelopment()){
            //     app.UseDeveloperExceptionPage();
            // }
            // app.UseCors("Policy1");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
