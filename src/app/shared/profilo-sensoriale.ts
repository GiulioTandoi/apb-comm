import { Component, computed, input } from '@angular/core';
import { TPipe } from '../core/t.pipe';

/** Intensità su cinque tondi tracciati a mano. I valori (1–5) vanno presi dal panel di assaggio. */
@Component({
  selector: 'app-profilo-sensoriale',
  imports: [TPipe],
  template: `
    <div class="cm-m-box">
      <span class="cm-eyebrow">{{ 'oil.profile' | t }}</span>
      <ul class="cm-profile">
        @for (row of rows(); track row.key) {
          <li>
            <span>{{ row.key | t }}</span>
            <span class="cm-pips" role="img" [attr.aria-label]="row.value + ' ' + ('oil.outOf' | t)">
              @for (i of pips; track i) { <i [class.on]="i < row.value"></i> }
            </span>
          </li>
        }
      </ul>
      <p class="cm-caption cm-profile__note">{{ 'oil.profileNote' | t }}</p>
    </div>
  `,
})
export class ProfiloSensoriale {
  readonly fruity = input(5);
  readonly bitter = input(4);
  readonly spicy = input(4);
  protected readonly pips = [0, 1, 2, 3, 4];
  protected readonly rows = computed(() => [
    { key: 'oil.fruity', value: this.fruity() },
    { key: 'oil.bitter', value: this.bitter() },
    { key: 'oil.spicy', value: this.spicy() },
  ]);
}
