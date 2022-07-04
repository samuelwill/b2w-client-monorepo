import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Button from './button';

@Component({
  selector: 'lib-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGroupComponent implements OnInit {

  @Input()
  public buttons: Button[] = [];

  @Output()
  public selectedButton = new EventEmitter<Button>();

  constructor() { }

  ngOnInit(): void {
  }

}

