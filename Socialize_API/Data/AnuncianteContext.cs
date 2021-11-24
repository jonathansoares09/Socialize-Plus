using Microsoft.EntityFrameworkCore;
using Socialize_API.Models; 
 
namespace Socialize_API.Data 
{ 
    public class AnuncianteContext: DbContext  
    { 
         public AnuncianteContext(DbContextOptions<AnuncianteContext> options): base (options) {
         }
    
    public DbSet<Anunciante> Anunciante {get; set;}

    } 
}