import { NgModule } from '@angular/core';
import { CoreComponentsComponent } from './core-components.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CoreComponentsComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    DateInputsModule
  ],
  exports: [
    CoreComponentsComponent,
    DatepickerComponent
  ]
})
export class CoreComponentsModule { }
