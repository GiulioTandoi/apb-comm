import { Component } from '@angular/core';
import { SITE } from '../core/site.config';
import { TPipe } from '../core/t.pipe';

/** I due collegamenti all'ospitalità di famiglia: agriturismo e B&B (link in SITE). */
@Component({
  selector: 'app-ospitalita-cards',
  imports: [TPipe],
  template: `
    <div class="site-stay">
      <article class="cm-m-box site-stay__card">
        <img src="img/schizzi/schizzo-piliere.svg" alt="" width="220" height="600" class="site-stay__icon">
        <h3 class="cm-heading">{{ 'stay.agriTitle' | t }}</h3>
        <p class="cm-body">{{ 'stay.agriText' | t }}</p>
        <a class="cm-m-btn" [href]="site.agriturismoUrl" target="_blank" rel="noopener">
          {{ 'stay.agriCta' | t }}<span class="site-sr-only"> {{ 'common.newWindow' | t }}</span>
        </a>
      </article>
      <article class="cm-m-box site-stay__card">
        <img src="img/schizzi/schizzo-ramo-ulivo.svg" alt="" width="600" height="160" class="site-stay__icon site-stay__icon--wide">
        <h3 class="cm-heading">{{ 'stay.bnbTitle' | t }}</h3>
        <p class="cm-body">{{ 'stay.bnbText' | t }}</p>
        <a class="cm-m-btn cm-m-btn--ghost" [href]="site.bnbUrl" target="_blank" rel="noopener">
          {{ 'stay.bnbCta' | t }}<span class="site-sr-only"> {{ 'common.newWindow' | t }}</span>
        </a>
      </article>
    </div>
  `,
})
export class OspitalitaCards {
  protected readonly site = SITE;
}
