// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using Socialize_API.Data;
// using Socialize_API.Models;
// using Socialize_API.Services;
// using Microsoft.AspNetCore.Authorization;
// using System;

// namespace Socialize_API.Controllers
// {
//     [Route("api/")]
//     [ApiController]

//     public class EventoController : Controller
//     {
//         private readonly SocializeContext _context;
//         public EventoController(SocializeContext context)
//         {
//             //Construtor
//             _context = context;
//         }
        
//         [HttpGet]
//         public ActionResult<List<Evento>> GetAll() {
//             return _context.Eventos.ToList();
//         }

//         [HttpGet("evento/{EventoId}")] // Requisições GET com parâmetro
//         public ActionResult<List<Evento>> Get(int EventoId)
//         {
//          try
//          {
//             var result = _context.Eventos.Find(EventoId); //Método Find na tabela Evento
//             if (result == null) {
//                 return NotFound();
//             }
//             return Ok(result);
//          }
//          catch
//          {
//             return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
//          }
//         }

//         [HttpPost]
//         [Route("evento")]
//         public async Task<ActionResult> post(Evento model) // O parâmetro model traZ a estrutura do Evento (todos campos)
//         {
//             try {
//                 _context.Eventos.Add(model); //Insert na tabela Evento

//                 if (await _context.SaveChangesAsync() == 1){
//                     //return Ok();
//                     return Created($"/api/evento/{model.Id}",model);
//                 }
//             }
//             catch {
//                 return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
//             }
//             //Retorna BadRequest se não conseguiu incluir
//             return BadRequest();
//         }

//         [HttpPut("evento/{EventoId}")]
//             public async Task<ActionResult> put(int EventoId, Evento dadosEventoAlt)
//         {
//             try {
//                 //Verifica se existe Evento a ser alterado
//                 var result = await _context.Eventos.FindAsync(EventoId);
//                 if (EventoId != result.Id) {
//                     return BadRequest();
//                 }
//                 result.Id = dadosEventoAlt.Id;
//                 result.nomeEvento = dadosEventoAlt.nomeEvento;
//                 result.urlImg = dadosEventoAlt.urlImg;
//                 result.dataEvento = dadosEventoAlt.dataEvento;
//                 result.idCategoria = dadosEventoAlt.idCategoria;
//                 result.descEvento = dadosEventoAlt.descEvento;
//                 result.idAnunciante = dadosEventoAlt.idAnunciante;
//                 result.cep = dadosEventoAlt.cep;
//                 result.logradouro = dadosEventoAlt.logradouro;
//                 result.numero = dadosEventoAlt.numero;
//                 result.bairro = dadosEventoAlt.bairro;
//                 result.cidade = dadosEventoAlt.cidade;
//                 result.uf = dadosEventoAlt.uf;

//                 await _context.SaveChangesAsync();
//                 return Created($"/api/evento/{dadosEventoAlt.Id}", dadosEventoAlt);
//             }
//             catch {
//                 return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
//             }
//         }

//         [HttpDelete("evento/{EventoId}")]
//         public async Task<ActionResult> delete(int EventoId)
//         {
//             try{
//                 //verifica se existe Evento a ser excluido
//                 var evento = await _context.Eventos.FindAsync(EventoId);
//                 if (evento == null){
//                     //Método do EntityFramework
//                     return NotFound();
//                 }
//                 _context.Remove(evento); //Se achou, remove
//                 await _context.SaveChangesAsync();
//                 return Ok();
//             }
//             catch {
//                 return this.StatusCode(StatusCodes.Status500InternalServerError,"Falha no acesso ao banco de dados.");
//             }
//         }

        
//     }
// }