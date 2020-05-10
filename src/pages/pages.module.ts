import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
	declarations: [
		PagesComponent,
		LoginComponent,
		ScheduleComponent,
		EquipmentComponent
	],
	exports: [],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class PagesModule {}

