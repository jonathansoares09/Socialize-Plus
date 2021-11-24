using Microsoft.AspNetCore.Mvc;

namespace Socialize_API.Controllers
{
    [Route("/")]
    public class HomeController
    {
        [HttpGet]
        public IActionResult Inicio(){
            return new ContentResult 
            { 
                ContentType = "text/html", 
                Content = "<h1>API rodando.</h1>" 
            }; 
        }
    }
}