using Microsoft.EntityFrameworkCore;
using Socialize_API.Models; 
 
namespace Socialize_API.Data 
{ 
    public class EventoContext: DbContext  
    { 
         public EventoContext(DbContextOptions<EventoContext> options): base (options) {
         }
    
    public DbSet<Evento> Eventos {get; set;}

    } 
}