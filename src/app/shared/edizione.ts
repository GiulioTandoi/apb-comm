import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { SITE } from '../core/site.config';
import { TPipe } from '../core/t.pipe';

type State = 'idle' | 'sending' | 'success' | 'error' | 'invalid';

/** Edizione numerata con lista d'attesa via email (tema Notte, sigillo). */
@Component({
  selector: 'app-edizione',
  imports: [TPipe],
  template: `
    <section class="cm-section cm-m-edizione" data-theme="dark" id="edizione">
      <div class="cm-container cm-m-edizione__grid">
        <img src="img/logo/pilieri-sigillo-pietra.svg" [alt]="'edition.sealAlt' | t" width="300" height="300">
        <div>
          <span class="cm-badge">{{ 'edition.badge' | t }} {{ edition.harvest }}</span>
          <h2 class="cm-display-l site-mt-5">{{ 'edition.title' | t }}</h2>
          <p class="cm-body-l">{{ 'edition.text' | t }}</p>

          @if (state() === 'success') {
            <p class="site-form-msg" role="status">{{ 'edition.success' | t }}</p>
          } @else {
            <form class="cm-form" (submit)="submit($event)" novalidate>
              <label class="site-sr-only" for="waitlist-email">{{ 'edition.emailLabel' | t }}</label>
              <input class="cm-m-field" id="waitlist-email" type="email" autocomplete="email" required
                     [placeholder]="'edition.emailPlaceholder' | t" [value]="email()" (input)="email.set($any($event.target).value)">
              <button class="cm-m-btn cm-m-btn--light" type="submit" [disabled]="state() === 'sending'">
                {{ (state() === 'sending' ? 'edition.sending' : 'edition.submit') | t }}
              </button>
            </form>
            <label class="site-check">
              <input type="checkbox" [checked]="consent()" (change)="consent.set($any($event.target).checked)">
              <span>{{ 'edition.privacy' | t }}</span>
            </label>
            @if (state() === 'invalid' || state() === 'error') {
              <p class="site-form-msg is-error" role="alert">{{ (state() === 'invalid' ? 'edition.invalid' : 'edition.error') | t }}</p>
            } @else {
              <p class="cm-caption site-mt-3">{{ 'edition.note' | t }}</p>
            }
          }
        </div>
      </div>
    </section>
  `,
})
export class Edizione {
  private readonly i18n = inject(I18nService);
  protected readonly edition = SITE.edition;
  protected readonly email = signal('');
  protected readonly consent = signal(false);
  protected readonly state = signal<State>('idle');

  async submit(event: Event): Promise<void> {
    event.preventDefault();
    const email = this.email().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !this.consent()) {
      this.state.set('invalid');
      return;
    }
    if (!SITE.waitlistEndpoint) {
      // Modalità dimostrativa: imposta SITE.waitlistEndpoint per inviare davvero le iscrizioni.
      console.info('[Corona di Murgia] Iscrizione (demo):', email);
      this.state.set('success');
      return;
    }
    this.state.set('sending');
    try {
      const res = await fetch(SITE.waitlistEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang: this.i18n.lang() }),
      });
      this.state.set(res.ok ? 'success' : 'error');
    } catch {
      this.state.set('error');
    }
  }
}
