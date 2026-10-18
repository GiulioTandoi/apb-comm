import { Component } from '@angular/core';
import { TPipe } from '../../core/t.pipe';
import { OspitalitaCards } from '../../shared/ospitalita-cards';
import { PageHead } from '../../shared/page-head';

@Component({
  selector: 'app-ospitalita',
  imports: [TPipe, OspitalitaCards, PageHead],
  template: `
    <app-page-head crumb="nav.stay" eyebrow="stay.eyebrow" title="stay.title" intro="stay.pageIntro" />

    <section class="cm-section">
      <div class="cm-container"><app-ospitalita-cards /></div>
    </section>

    <section class="cm-section cm-section--stone cm-m-photo">
      <div class="cm-container cm-m-photo__grid">
        <figure class="cm-m-print site-m-0">
          <img src="img/agriturismo-pilieri.jpg" [alt]="'hero.imageAlt' | t" width="1800" height="1200" loading="lazy">
          <figcaption class="cm-m-note">{{ 'hero.caption' | t }}</figcaption>
        </figure>
        <div>
          <span class="cm-eyebrow">{{ 'stay.eyebrow' | t }}</span>
          <h2 class="cm-heading">{{ 'stay.pageWhyTitle' | t }}</h2>
          <div class="site-why">
            @for (w of why; track w.n) {
              <div><span class="cm-numeral">{{ w.n }}</span><h3 class="cm-title">{{ w.title | t }}</h3><p class="cm-body cm-muted">{{ w.text | t }}</p></div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class OspitalitaPage {
  protected readonly why = [
    { n: 'I', title: 'stay.why1Title', text: 'stay.why1Text' },
    { n: 'II', title: 'stay.why2Title', text: 'stay.why2Text' },
    { n: 'III', title: 'stay.why3Title', text: 'stay.why3Text' },
  ];
}
