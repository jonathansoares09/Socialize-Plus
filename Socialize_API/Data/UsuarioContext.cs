using Microsoft.EntityFrameworkCore;
using Socialize_API.Models; 
 
namespace Socialize_API.Data 
{ 
    public class UsuarioContext: DbContext  
    { 
         public UsuarioContext(DbContextOptions<UsuarioContext> options): base (options) {
         }
    
    public DbSet<Usuario> Usuario {get; set;}

    } 
}