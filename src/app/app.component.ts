import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-banking></app-banking>
  `
})
export class AppComponent {
  title = 'teste-unitario';

  public soma(value1:number, value2:number){
    return value1 + value2;
  }
}
