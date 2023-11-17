import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { RedButtonViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


const routes: Routes = [
  {
    path: '',
    component: RedButtonViewComponent
  }
]

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RedButtonModule { }
