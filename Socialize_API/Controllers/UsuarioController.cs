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
    [Route("api/")]
    [ApiController]

    public class UsuarioController : Controller
    {
        private readonly SocializeContext _context;
        public UsuarioController(SocializeContext context)
        {
            //Construtor
            _context = context;
        }
        
        [HttpGet]
        public ActionResult<List<Usuario>> GetAll()
        {
            return _context.Usuarios.ToList();
        }

        [HttpGet("usuario/{UsuarioId}")] // Requisições GET com parâmetro
        public ActionResult<List<Usuario>> Get(int UsuarioId)
        {
         try
         {
            var result = _context.Usuarios.Find(UsuarioId); //Método Find na tabela Usuario
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
        [Route("login")]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody] Usuario model) 
        { 
            var usuario = _context.Usuarios.Where(u => u.Email == model.Email && u.Senha == model.Senha).FirstOrDefault(); 
 
            if (usuario == null) 
                return NotFound(new { message = "Usuário ou senha inválidos" }); 
 
            var token = TokenService.GenerateToken(usuario); 
            usuario.Senha = "";
            return new 
            { 
                usuario = usuario,
                token = token 
            }; 
        }

        [HttpGet]
        [Route("login/authenticated")]
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
        [Route("usuario")]
        public async Task<ActionResult> post(Usuario model) // O parâmetro model traZ a estrutura do Usuario (todos campos)
        {
            try {
                _context.Usuarios.Add(model); //Insert na tabela usuario

                if (await _context.SaveChangesAsync() == 1){
                    //return Ok();
                    return Created($"/api/usuario/{model.Id}",model);
                }
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            //Retorna BadRequest se não conseguiu incluir
            return BadRequest();
        }

        [HttpPut("usuario/{UsuarioId}")]
        public async Task<ActionResult> put(int UsuarioId, Usuario dadosUsuarioAlt)
        {
            try {
                //Verifica se existe usuario a ser alterado
                var result = await _context.Usuarios.FindAsync(UsuarioId);
                if (UsuarioId != result.Id) {
                    return BadRequest();
                }
                result.Id = dadosUsuarioAlt.Id;
                result.Nome = dadosUsuarioAlt.Nome;
                result.Email = dadosUsuarioAlt.Email;
                result.Senha = dadosUsuarioAlt.Senha;
                result.Celular = dadosUsuarioAlt.Celular;
                result.Sexo = dadosUsuarioAlt.Sexo;
                result.Endereco = dadosUsuarioAlt.Endereco;
                result.numEndereco = dadosUsuarioAlt.numEndereco;
                result.Bairro = dadosUsuarioAlt.Bairro;
                result.Cidade = dadosUsuarioAlt.Cidade;
                result.Uf = dadosUsuarioAlt.Uf;
                result.Cep = dadosUsuarioAlt.Cep;
                result.diaNasc = dadosUsuarioAlt.diaNasc;
                result.mesNasc = dadosUsuarioAlt.mesNasc;
                result.anoNasc = dadosUsuarioAlt.anoNasc;
                result.Ativo = dadosUsuarioAlt.Ativo;
                result.Perfil = dadosUsuarioAlt.Perfil;

                await _context.SaveChangesAsync();
                return Created($"/api/usuario/{dadosUsuarioAlt.Id}", dadosUsuarioAlt);
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("usuario/{UsuarioId}")]
        public async Task<ActionResult> delete(int UsuarioId)
        {
            try{
                //verifica se existe usuario a ser excluido
                var usuario = await _context.Usuarios.FindAsync(UsuarioId);
                if (usuario == null){
                    //Método do EntityFramework
                    return NotFound();
                }
                _context.Remove(usuario); //Se achou, remove
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch {
                return this.StatusCode(StatusCodes.Status500InternalServerError,"Falha no acesso ao banco de dados.");
            }
        }

        
    }
}