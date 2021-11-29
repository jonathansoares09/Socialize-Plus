using Microsoft.EntityFrameworkCore;
using Socialize_API.Models; 
 
namespace Socialize_API.Data 
{ 
    public class SocializeContext: DbContext  
    { 
         public SocializeContext(DbContextOptions<SocializeContext> options): base (options) {
         }
    
    public DbSet<Usuario> Usuarios {get; set;} // Classe Usuario sendo persistida <Usuario>, na tabela Usuario
    public DbSet<Anunciante> Anunciantes {get; set;}
    public DbSet<Evento> Eventos {get; set;}

    } 
}