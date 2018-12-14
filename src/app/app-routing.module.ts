import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  {path: 'app' , component: TypeComponent},
  {path: 'chat' , component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
