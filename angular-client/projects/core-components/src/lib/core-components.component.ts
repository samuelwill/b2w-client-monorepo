import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core-components',
  template: `
    <p>
      Best component ever!
    </p>
  `,
  styles: [
  ]
})
export class CoreComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
