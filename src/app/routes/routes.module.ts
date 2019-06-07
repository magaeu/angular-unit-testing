import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from '../components/quotes/quotes.component';
import {CommonModule} from '@angular/common';
import {TeamComponent} from '../components/team/team.component';
import {InputOutputParentComponent} from '../components/input-output/input-output-parent.component';

const routes: Routes = [
  {
    path: '',
    component: QuotesComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'input',
    component: InputOutputParentComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule { }
