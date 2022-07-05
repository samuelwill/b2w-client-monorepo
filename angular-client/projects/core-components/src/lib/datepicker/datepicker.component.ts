import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit {

  @Input()
  public dateValue = new Date();

  @Input()
  public disabled = false;

  @Input()
  public disabledDates = (date: Date) => false;

  @Output()
  public dateChanged = new EventEmitter<Date>();

  public onValueChange(date: Date): void {
    this.dateChanged.emit(date);
  }

  ngOnInit(): void {
  }

}
