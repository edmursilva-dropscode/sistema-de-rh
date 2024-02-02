using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CrudApi.Models;

namespace CrudApi.Context
{
    public class FuncionarioContext : DbContext
    {
        //construtor de ligação da base de dados
        public FuncionarioContext(DbContextOptions<FuncionarioContext> options) : base(options)
        {

        }

        //propriedade representando a entidade/tabela 
        //Funcionario
        public DbSet<Funcionario> Funcionarios { get; set; }            
    }
}