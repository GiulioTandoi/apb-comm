import { Component } from '@angular/core';
import { TPipe } from '../core/t.pipe';

/** I valori del marchio come tre pilieri disegnati: terra, famiglia, pazienza. */
@Component({
  selector: 'app-tre-pilieri',
  imports: [TPipe],
  template: `
    <div class="cm-m-pillars">
      @for (p of pillars; track p.n) {
        <div class="cm-m-pillar">
          <img src="img/schizzi/schizzo-piliere.svg" alt="" width="220" height="600">
          <span class="cm-numeral">{{ p.n }}</span>
          <h3 class="cm-title">{{ p.title | t }}</h3>
          <p class="cm-body">{{ p.text | t }}</p>
        </div>
      }
    </div>
  `,
})
export class TrePilieri {
  protected readonly pillars = [
    { n: 'I', title: 'story.p1Title', text: 'story.p1Text' },
    { n: 'II', title: 'story.p2Title', text: 'story.p2Text' },
    { n: 'III', title: 'story.p3Title', text: 'story.p3Text' },
  ];
}
