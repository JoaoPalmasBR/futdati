import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListarAtletasComponent } from './listar-atletas/listar-atletas.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CadastrarAtletaComponent } from './cadastrar-atleta/cadastrar-atleta.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'cadastrar', component: CadastrarAtletaComponent},
  { path: 'listar', component: ListarAtletasComponent},
  // { path: 'hero/:id',      component: HeroDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ListarAtletasComponent,
    PageNotFoundComponent,
    HomePageComponent,
    CadastrarAtletaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
