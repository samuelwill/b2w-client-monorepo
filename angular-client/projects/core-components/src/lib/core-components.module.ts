import { NgModule } from '@angular/core';
import { CoreComponentsComponent } from './core-components.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';

@NgModule({
  declarations: [
    CoreComponentsComponent,
    DatepickerComponent
  ],
  imports: [
    DatePickerModule
  ],
  exports: [
    CoreComponentsComponent,
    DatepickerComponent
  ]
})
export class CoreComponentsModule { }
