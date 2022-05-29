import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompareObjectComponent } from './pages/compare-object/compare-object.component';
import { DeepCloneComponent } from './pages/deep-clone/deep-clone.component';
import { RepeaterComponent } from './pages/repeater/repeater.component';
import { SimpleCompilerComponent } from './pages/simple-compiler/simple-compiler.component';
import { SortingPipeComponent } from './pages/sorting-pipe/sorting-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: DeepCloneComponent,
  },
  { path: 'compare-object', component: CompareObjectComponent },
  { path: 'repeater', component: RepeaterComponent },
  { path: 'simple-compiler', component: SimpleCompilerComponent },
  { path: 'sorting-pipe', component: SortingPipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
