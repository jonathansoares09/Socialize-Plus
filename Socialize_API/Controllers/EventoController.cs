using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Socialize_API.Data;
using Socialize_API.Models;
using Socialize_API.Services;
using Microsoft.AspNetCore.Authorization;
using System;

namespace Socialize_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EventoController : Controller
    {
        private readonly EventoContext _context;
        public EventoController(EventoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Evento>> GetAll(){
            return _context.Eventos.ToList();
        }

        [HttpGet("{EventoId}")]
        public ActionResult<List<Evento>> Get(int EventoId)
        {
            try{
                var result = _context.Eventos.Find(EventoId);
                if (result == null) {
                    return NotFound();
                }
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost]
        public async Task<ActionResult> post(Evento model)
        {
            try{
                _context.Eventos.Add(model);

                if (await _context.SaveChangesAsync() == 1){
                    return Created($"api/evento/{model.id}", model);
                }
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            return BadRequest();
        }

        [HttpPut("{EventoId}")]
        public async Task<ActionResult> put(int EventoId, Evento dadosEventoAlt)
        {
            try {
                //Verifica se existe Evento a ser alterado
                var result = await _context.Eventos.FindAsync(EventoId);
                if (EventoId != result.id) {
                    return BadRequest();
                }
                result.id = dadosEventoAlt.id;
                result.nomeEvento = dadosEventoAlt.nomeEvento;
                result.urlImg = dadosEventoAlt.urlImg;
                result.dataEvento = dadosEventoAlt.dataEvento;
                result.idCategoria = dadosEventoAlt.idCategoria;
                result.descEvento = dadosEventoAlt.descEvento;
                result.idAnunciante = dadosEventoAlt.idAnunciante;
                result.cep = dadosEventoAlt.cep;
                result.logradouro = dadosEventoAlt.logradouro;
                result.numero = dadosEventoAlt.numero;
                result.bairro = dadosEventoAlt.bairro;
                result.cidade = dadosEventoAlt.cidade;
                result.uf = dadosEventoAlt.uf;

                await _context.SaveChangesAsync();
                return Created($"api/evento/{dadosEventoAlt.id}", dadosEventoAlt);
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{EventoId}")]
        public async Task<ActionResult> delete(int EventoId)
        {
            try{
                //verifica se existe Evento a ser excluido
                var evento = await _context.Eventos.FindAsync(EventoId);
                if (evento == null){
                    //Método do EntityFramework
                    return NotFound();
                }
                _context.Remove(evento); //Se achou, remove
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError,"Falha no acesso ao banco de dados.");
            }
        }

    }
}