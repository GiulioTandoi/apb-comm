import { Component } from '@angular/core';
import { TPipe } from '../core/t.pipe';

/** La bottiglia disegnata, in piedi tra due pilieri. */
@Component({
  selector: 'app-varco',
  imports: [TPipe],
  template: `
    <div class="cm-m-varco" role="img" [attr.aria-label]="'oil.bottleAlt' | t">
      <img class="p" src="img/schizzi/schizzo-piliere.svg" alt="" width="220" height="600">
      <img class="b" src="img/schizzi/schizzo-bottiglia.svg" alt="" width="260" height="760">
      <img class="p" src="img/schizzi/schizzo-piliere.svg" alt="" width="220" height="600">
    </div>
  `,
})
export class Varco {}
