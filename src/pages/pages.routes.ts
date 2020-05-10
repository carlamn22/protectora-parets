import { Routes } from '@angular/router';

import { EquipmentComponent } from './equipment/equipment.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const pagesRoutes: Routes = [{
	path: '',
	children: [
		{
			path: 'schedule',
			component: ScheduleComponent
		},
		{
			path: 'equipment',
			component: EquipmentComponent
		},
		{
			path: '',
			redirectTo: 'schedule',
			pathMatch: 'full'
		}
	]
}];
