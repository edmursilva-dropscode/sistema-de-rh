using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudApi.Models
{
    public class Funcionario
    {
        //propriedades
        public int Id { get; set; }    

        [MaxLength(250)]    
        public string? Nome { get; set; } = string.Empty;

        [MaxLength(250)]
        //[StringLenght(250)]
        public string? Endereco { get; set; } = string.Empty;

        [MaxLength(5)]
        //[StringLenght(5)]
        public string? Ramal { get; set; } = string.Empty;

        [MaxLength(250)]
        //[StringLenght(250)]
        public string? EmailProfissional { get; set; } = string.Empty;

        [MaxLength(150)]
        //[StringLenght(150)]
        public string? Departamento { get; set; } = string.Empty;
        
        [Column(TypeName = "decimal(10,2)")]
        public decimal Salario { get; set; }
        
        public DateTimeOffset DataAdmissao { get; set; }        
    }
}