import { NgModule } from '@angular/core';
import {
	NbCardModule,
	NbTreeGridModule,
	NbIconModule,
	NbInputModule,
	NbActionsModule,
	NbButtonModule,
	NbTabsetModule,
	NbUserModule,
	NbRadioModule,
	NbSelectModule,
	NbListModule,
	NbAlertModule,
	NbCalendarKitModule,
	NbCalendarModule,
	NbCalendarRangeModule,
	NbChatModule,
	NbProgressBarModule,
	NbSpinnerModule,
	NbCheckboxModule,
	NbDatepickerModule,
	NbSidebarModule,
	NbLayoutModule,
	NbMenuModule,
	NbSearchModule,
	NbContextMenuModule,
	NbThemeModule,
	NbStepperModule,
	NbToggleModule,
	NbDialogModule,
	NbWindowModule
} from '@nebular/theme';

const NEBULAR_MODULES = [
	NbCardModule,
	NbTreeGridModule,
	NbIconModule,
	NbInputModule,
	NbActionsModule,
	NbButtonModule,
	NbTabsetModule,
	NbUserModule,
	NbRadioModule,
	NbSelectModule,
	NbListModule,
	NbAlertModule,
	NbCalendarKitModule,
	NbCalendarModule,
	NbCalendarRangeModule,
	NbChatModule,
	NbProgressBarModule,
	NbSpinnerModule,
	NbCheckboxModule,
	NbDatepickerModule,
	NbSidebarModule,
	NbLayoutModule,
	NbMenuModule,
	NbSearchModule,
	NbContextMenuModule,
	NbThemeModule,
	NbStepperModule,
	NbToggleModule,
	NbDialogModule,
	NbWindowModule
];

@NgModule({
	imports: NEBULAR_MODULES,
	exports: NEBULAR_MODULES
})

export class NebularModule { }
