import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ImgComponent} from "@components/img/img.component";
import {NotFoundComponent} from "@components/not-found/not-found.component";
import {ImgViewComponent} from "@components/img-view/img-view.component";

const routes: Routes = [
  {
    component: ImgComponent,
    path: 'main',
  },
  {
    component: ImgViewComponent,
    path: 'view/:id',
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: "full"
  },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
