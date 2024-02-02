import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioApiService {

  readonly funcionarioAPIurl = "http://localhost:5272/api";      //Configurando Angular para acessar serviços FUNCIONARIO-API

  constructor(private http:HttpClient) { }                        //Configurando HTTP para acessar serviços FUNCIONARIO-API

  //Configurando e mapeando as rotas dos serviços API/Funcionario
  //////////////////////////////////////////////////
  //GET - ExibirTodos
  getFuncionarioList():Observable<any[]>{
    return this.http.get<any>(this.funcionarioAPIurl + '/Funcionario/ExibirTodos');
  }

  //POST - Incluir
  addFuncionario(data:any) {
    return this.http.post(this.funcionarioAPIurl + '/Funcionario/Incluir', data);
  }

  //PUT - Atualizar
  updateFuncionario(id:number|string, data:any) {
    return this.http.put(this.funcionarioAPIurl + `/Funcionario/Atualizar${id}`, data);
  }

  //DELETE - Deletar
  deleteFuncionario(id:number|string) {
    return this.http.delete(this.funcionarioAPIurl + `/Funcionario/Deletar${id}`);
  }

}
