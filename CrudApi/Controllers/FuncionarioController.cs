using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CrudApi.Context;
using CrudApi.Models;


namespace CrudApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FuncionarioController : ControllerBase
    {
        //atributo somente leitura
        private readonly FuncionarioContext _context;

        //construtor
        public FuncionarioController(FuncionarioContext context)
        {
            _context = context;
        }

        // GET: api/Funcionarios - metodo exibir todos registros
        [HttpGet("ExibirTodos")]
        public async Task<ActionResult<IEnumerable<Funcionario>>> GetFuncionarios()
        {
            if (_context.Funcionarios == null)
            {
                return NotFound();
            }
            return await _context.Funcionarios.ToListAsync();
        }

        // GET: api/Funcionarios - metodo pesquisar por id
        [HttpGet("PesquisarPorId{id}")]
        public async Task<ActionResult<Funcionario>> GetFuncionario(int id)
        {
            if (_context.Funcionarios == null)
            {
                return NotFound();
            }

            var funcionario = await _context.Funcionarios.FindAsync(id);
            if (funcionario == null)
            {
                return NotFound();
            }
            return funcionario;
        }

        // POST: api/Funcionarios - metodo incluir
        [HttpPost("Incluir")]
        public async Task<ActionResult<Funcionario>> PostFuncionario(Funcionario funcionario)
        {
            if (_context.Funcionarios == null)
            {
                //return Problem("Entity set 'FuncionarioContext.Funcionarios'  is null.");
                return NotFound();
            }

            _context.Funcionarios.Add(funcionario);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetFuncionario", new { id = funcionario.Id }, funcionario);
        }

        // PUT: api/Funcionario - metodo atualizar
        [HttpPut("Atualizar{id}")]
        public async Task<IActionResult> PutFuncionario(int id, Funcionario funcionario)
        {
            if (id != funcionario.Id)
            {
                return BadRequest();
            }

            _context.Entry(funcionario).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FuncionarioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent(); 
        }

        // DELETE: api/Funcionario - metodo deletar
        [HttpDelete("Deletar{id}")]
        public async Task<IActionResult> DeleteFuncionario(int id)
        {
            if (_context.Funcionarios == null)
            {
                return NotFound();
            }
            var funcionario = await _context.Funcionarios.FindAsync(id);
            if (funcionario == null)
            {
                return NotFound();
            }
            
            _context.Funcionarios.Remove(funcionario);
            await _context.SaveChangesAsync();
       
            return NoContent();
        }

        // VERIFICAR: api/Funcionarios - metodo verificar
        private bool FuncionarioExists(int id)
        {
            return (_context.Funcionarios?.Any(e => e.Id == id)).GetValueOrDefault();
        }

    }
}