import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/pages/login/login.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { PagesComponent } from 'src/pages/pages.component';
import { pagesRoutes } from 'src/pages/pages.routes';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
		{
		path: '',
		component: PagesComponent,
		children: pagesRoutes
	},

	{ path: '**', redirectTo: 'login' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
