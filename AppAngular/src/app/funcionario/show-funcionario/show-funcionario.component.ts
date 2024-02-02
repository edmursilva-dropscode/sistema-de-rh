import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioApiService } from 'src/app/funcionario-api.service';

@Component({
  selector: 'app-show-funcionario',
  templateUrl: './show-funcionario.component.html',
  styleUrls: ['./show-funcionario.component.css']
})
export class ShowFuncionarioComponent implements OnInit {

  funcionarioList$!: Observable<any[]>;                                    /* implemantar o que o aplicativo vai consumir/acontecer */

  constructor(private service:FuncionarioApiService) { }                   /* declarar qual servico vai utlizar */

  ngOnInit(): void{
    this.funcionarioList$ = this.service.getFuncionarioList();             /* ng-Init instanciar para listar os funcionarios atraves <table>????</table> */
  }

  //variavel (prpriedades)
  modalTitle:string = '';
  activateAddEditFuncionariosComponent:boolean = false;
  funcionarioCadastro:any;

  modalAdd() {
    this.funcionarioCadastro = {
      id: 0,
      nome: null,
      endereco: null,
      ramal: null,
      departamento: null,
      salario: 0,
      dataAdmissao: null
    }
    this.modalTitle = "Novo Funcionario";
    this.activateAddEditFuncionariosComponent = true;
  }

  modalEdit(item:any) {
    this.funcionarioCadastro = item;
    this.modalTitle = "Editar Tarefa";
    this.activateAddEditFuncionariosComponent = true;
  }

  modalDelete(item:any) {
    if (confirm(`Confirma a exclusão da tarefa ${item.id}`)) {
      this.service.deleteFuncionario(item.id).subscribe(res => {
        var closeModelBtn = document.getElementById('add-edit-model-close');
        if (closeModelBtn) {
          closeModelBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-sucess-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none";
          }
        }, 8000);
      })
    }
  }

  modalClose() {
    this.activateAddEditFuncionariosComponent = false;
    this.funcionarioList$ = this.service.getFuncionarioList();
  }

}
