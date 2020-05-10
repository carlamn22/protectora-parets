import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NebularModule } from './nebular.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NebularModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		NebularModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	entryComponents: [ ]
})
export class SharedModule { }