import { HttpClientModule } from '@angular/common/http';                                            /* biblioteca do HTTP */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';                                  /* biblioteca do FORMS MODULE REACTIVE */
import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ShowFuncionarioComponent } from './funcionario/show-funcionario/show-funcionario.component';
import { AddEditFuncionarioComponent } from './funcionario/add-edit-funcionario/add-edit-funcionario.component';
import { FuncionarioApiService } from './funcionario-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';                    /* biblioteca do SERVICO_API funcionario */


@NgModule({
  declarations: [ AppComponent, FuncionarioComponent, ShowFuncionarioComponent, AddEditFuncionarioComponent ],
  imports: [ BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule ],
  providers: [FuncionarioApiService],
  bootstrap: [AppComponent]                                                                       /* colocar os providers criado para a aplicacao */
})
export class AppModule { }
