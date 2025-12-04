import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.html',
})
export class Btn {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';

}
