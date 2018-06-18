import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { HomeComponent }        from './home/home.component';
import { AuthGuard }            from './_guards/index';
import { AddCartComponent }     from './add-cart/add-cart.component';
import { AddWizardComponent }   from './add-wizard/add-wizard.component';
import { RegisterComponent }    from './register/register.component';

const appRoutes: Routes = [
    { 
        path: '',
        component: HomeComponent,
        // redirectTo: '/homepage',
        // pathMatch: 'full',
        canActivate: [AuthGuard] 
    },
    { 
        path: 'homepage', 
        component: HomeComponent
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'addcart', 
        component: AddCartComponent 
    },
    { 
        path: 'register', 
        component: RegisterComponent 
    },
    { 
        path: 'addwizard', 
        component: AddWizardComponent 
    },
    { 
        path: 'addwizard/:id', 
        component: AddWizardComponent 
    },
    { 
        path: 'addcart/:id', 
        component: AddCartComponent 
    },
    { 
        path: '**', 
        redirectTo: '/homepage' 
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}