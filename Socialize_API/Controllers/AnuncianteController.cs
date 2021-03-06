using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Socialize_API.Data;
using Socialize_API.Models;
using Socialize_API.Services;
using Microsoft.AspNetCore.Authorization;

namespace Socialize_API.Controllers
{
    [Route("api/")]
    [ApiController]

    public class AnuncianteController : Controller
    {
        private readonly SocializeContext _context;
        public AnuncianteController(SocializeContext context)
        {
            //Construtor
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Anunciante>> GetAll()
        {
            return _context.Anunciantes.ToList();
        }

        [HttpGet("anunciante/{AnuncianteId}")] // Requisições GET com parâmetro
        public ActionResult<List<Anunciante>> Get(int AnuncianteId)
        {
         try
         {
            var result = _context.Anunciantes.Find(AnuncianteId); //Método Find na tabela Anunciante
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

        // [HttpPost]
        // [Route("login")]
        // public async Task<ActionResult<dynamic>> Authenticate([FromBody] Anunciante model) 
        // { 
        //     var anunciante = _context.Anunciantes.Where(a => a.Email == model.Email && a.Senha == model.Senha).FirstOrDefault(); 
 
        //     if (anunciante == null) 
        //         return NotFound(new { message = "Usuário ou senha inválidos" }); 
 
        //     var token = TokenService.GenerateToken(anunciante); 
        //     anunciante.Senha = "";
        //     return new 
        //     { 
        //         anunciante = anunciante,
        //         token = token 
        //     }; 
        // }

        [HttpGet]
        [Route("anunciante/authenticated")]
        [Authorize]
        // public string Authenticated() => String.Format("Autenticado - {0}", Usuario.Identity.Email);

        [HttpGet]
        [Route("login/idoso")]
        [Authorize(Roles = "idoso")]
        public string Employee() => "Idoso";

        [HttpGet]
        [Route("login/anunciante")]
        [Authorize(Roles = "anunciante")]
        public string Manager() => "Anunciante";

        [HttpPost]
        [Route("anunciante")]
        public async Task<ActionResult> post(Anunciante model) // O parâmetro model traZ a estrutura do Usuario (todos campos)
        {
            try {
                _context.Anunciantes.Add(model); //Insert na tabela usuario

                if (await _context.SaveChangesAsync() == 1){
                    //return Ok();
                    return Created($"/api/anunciante/{model.Id}",model);
                }
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            //Retorna BadRequest se não conseguiu incluir
            return BadRequest();
        }

        [HttpPut("anunciante/{AnuncianteId}")]
        public async Task<ActionResult> put(int AnuncianteId, Anunciante dadosAnuncianteAlt)
        {
            try {
                //Verifica se existe usuario a ser alterado
                var result = await _context.Anunciantes.FindAsync(AnuncianteId);
                if (AnuncianteId != result.Id) {
                    return BadRequest();
                }
                result.Id = dadosAnuncianteAlt.Id;
                result.nomeTitular = dadosAnuncianteAlt.nomeTitular;
                result.emailContato = dadosAnuncianteAlt.emailContato;
                result.Email = dadosAnuncianteAlt.Email;
                result.Senha = dadosAnuncianteAlt.Senha;
                result.cpfTitular = dadosAnuncianteAlt.cpfTitular;
                result.razaoSocial = dadosAnuncianteAlt.razaoSocial;
                result.Cnpj = dadosAnuncianteAlt.Cnpj;
                result.inscricaoEstadual = dadosAnuncianteAlt.inscricaoEstadual;
                result.nomeFantasia = dadosAnuncianteAlt.nomeFantasia;
                result.Endereco = dadosAnuncianteAlt.Endereco;
                result.numEndereco = dadosAnuncianteAlt.numEndereco;
                result.Bairro = dadosAnuncianteAlt.Bairro;
                result.Cidade = dadosAnuncianteAlt.Cidade;
                result.Uf = dadosAnuncianteAlt.Uf;
                result.Cep = dadosAnuncianteAlt.Cep;
                result.Ativo = dadosAnuncianteAlt.Ativo;
                result.Perfil = dadosAnuncianteAlt.Perfil;


                await _context.SaveChangesAsync();
                return Created($"/api/anunciante/{dadosAnuncianteAlt.Id}", dadosAnuncianteAlt);
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("anunciante{AnuncianteId})")]
        public async Task<ActionResult> delete(int AnuncianteId)
        {
            try{
                //verifica se existe usuario a ser excluido
                var anunciante = await _context.Anunciantes.FindAsync(AnuncianteId);
                if (anunciante == null){
                    //Método do EntityFramework
                    return NotFound();
                }
                _context.Remove(anunciante); //Se achou, remove
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError,"Falha no acesso ao banco de dados.");
            }
        }

    }
}