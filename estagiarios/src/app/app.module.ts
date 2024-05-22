import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './form/cadastro/cadastro.component';
import { ParentDataComponent } from './form/parent-data/parent-data.component';
import { DirectivesComponent } from './form/directives/directives.component';
import { IfRenderComponent } from './form/if-render/if-render.component';
import { FormsModule } from '@angular/forms';
import { EventosComponent } from './form/eventos/eventos.component';
import { LinkforaComponent } from './form/linkfora/linkfora.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    LinkforaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
