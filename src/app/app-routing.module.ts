import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtlistBoardComponent } from './atlist-board/atlist-board.component';
import { AtlistDataComponent } from './atlist-data/atlist-data.component';
import { AtlistFormComponent } from './atlist-form/atlist-form.component';
import { AtlistLoginComponent } from './atlist-login/atlist-login.component';
// import {  } from '';

const routes: Routes = [
  { path:'', component: AtlistBoardComponent},
  { path:'dashboard', component: AtlistBoardComponent},
  { path:'list', component: AtlistDataComponent},
  { path:'create', component: AtlistFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
