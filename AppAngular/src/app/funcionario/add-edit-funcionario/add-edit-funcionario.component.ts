import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioApiService } from 'src/app/funcionario-api.service';


@Component({
  selector: 'app-add-edit-funcionario',
  templateUrl: './add-edit-funcionario.component.html',
  styleUrls: ['./add-edit-funcionario.component.css']
})
export class AddEditFuncionarioComponent implements OnInit  {

  funcionarioList$!: Observable<any[]>;                              /* implemantar o que o aplicativo vai consumir/acontecer */

  constructor(private service: FuncionarioApiService) { }            /* declarar qual servico vai utlizar */

  @Input() funcionario:any;                                          /* preparar entrada de dados dos funcionarios */
  id: number = 0;
  nome: string = "";
  endereco: string = "";
  ramal: string = "";
  emailProfissional: string = "";
  departamento: string = "";
  salario: number = 0;
  dataAdmissao: string = "";

  ngOnInit(): void {
    this.id = this.funcionario.id;                                  /* ng-Init instanciar  */
    this.nome = this.funcionario.nome;                              /* ng-Init instanciar  */
    this.endereco = this.funcionario.endereco;                      /* ng-Init instanciar  */
    this.ramal = this.funcionario.ramal;                            /* ng-Init instanciar  */
    this.emailProfissional = this.funcionario.emailProfissional;    /* ng-Init instanciar  */
    this.departamento = this.funcionario.departamento;              /* ng-Init instanciar  */
    this.salario = this.funcionario.salario;                        /* ng-Init instanciar  */
    this.dataAdmissao = this.funcionario.dataAdmissao;              /* ng-Init instanciar  */
  }

  /* *************************** */
  /* preparar metodos dos botoes */
  /* *************************** */
  /* metodo Adicionar Tarefa */
  addFuncionario() {
    var funcionario = {
      nome: this.nome,
      endereco: this.endereco,
      ramal: this.ramal,
      emailProfissional: this.emailProfissional,
      departamento: this.departamento,
      salario: this.salario,
      dataAdmissao: this.dataAdmissao
    }
    this.service.addFuncionario(funcionario).subscribe(res => {
      var closeModelBtn = document.getElementById('add-edit-model-close');
      if (closeModelBtn) {
        closeModelBtn.click();
      }

      var showAddSuccess = document.getElementById('add-sucess-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none";
        }
      }, 8000);
    })
  }

  /* metodo Atualizar Tarefa */
  updateFuncionario() {
    var funcionario = {
      id: this.id,
      nome: this.nome,
      endereco: this.endereco,
      ramal: this.ramal,
      emailProfissional: this.emailProfissional,
      departamento: this.departamento,
      salario: this.salario,
      dataAdmissao: this.dataAdmissao
    }
    var id:number = this.id;
    this.service.updateFuncionario(id,funcionario).subscribe(res => {
      var closeModelBtn = document.getElementById('add-edit-model-close');
      if (closeModelBtn) {
        closeModelBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-sucess-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none";
        }
      },8000);
    })
  }

}
