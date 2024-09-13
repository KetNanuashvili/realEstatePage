import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { AgentPageComponent } from './components/agent-page/agent-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: MainPageComponent }, 
  { path: 'list', component: ListPageComponent }, 
  {path: 'AgentPage', component: AgentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
