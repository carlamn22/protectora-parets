import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from 'src/pages/pages.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NbThemeModule.forRoot({ name: 'default' }),
		NbLayoutModule,
		NbEvaIconsModule,
		PagesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
