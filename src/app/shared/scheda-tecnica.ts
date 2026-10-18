import { Component } from '@angular/core';
import { SITE } from '../core/site.config';
import { TPipe } from '../core/t.pipe';

/** Scheda del prodotto. Acidità e polifenoli restano "dall'analisi del lotto" finché non arrivano i dati veri. */
@Component({
  selector: 'app-scheda-tecnica',
  imports: [TPipe],
  template: `
    <div class="cm-m-box">
      <span class="cm-eyebrow">{{ 'oil.sheet' | t }}</span>
      <dl class="cm-spec">
        <dt>{{ 'oil.cultivar' | t }}</dt><dd>{{ 'oil.cultivarValue' | t }}</dd>
        <dt>{{ 'oil.origin' | t }}</dt><dd>{{ 'oil.originValue' | t }}</dd>
        <dt>{{ 'oil.campaign' | t }}</dt><dd>{{ edition.campaign }}</dd>
        <dt>{{ 'oil.size' | t }}</dt><dd>{{ edition.size }}</dd>
        <dt>{{ 'oil.acidity' | t }}</dt><dd class="is-todo">{{ 'oil.fromAnalysis' | t }}</dd>
        <dt>{{ 'oil.polyphenols' | t }}</dt><dd class="is-todo">{{ 'oil.fromAnalysis' | t }}</dd>
      </dl>
    </div>
  `,
})
export class SchedaTecnica {
  protected readonly edition = SITE.edition;
}
