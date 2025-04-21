import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TemplateFormsComponent } from './components/forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'dataBinding',
      pathMatch: 'full'
    },
    {
      path: 'admin',
      component: AdminComponent
    },
    {
      path: 'dataBinding',
      component: DataBindingComponent
    },
    {
      path: 'template-forms',
      component: TemplateFormsComponent
    },
    {
      path: 'reactive-forms',
      component: ReactiveFormsComponent
    }
  ];
  