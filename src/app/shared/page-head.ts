import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TPipe } from '../core/t.pipe';

/** Testata delle pagine interne: lo schizzo del varco come sfondo chiaro dietro il titolo. */
@Component({
  selector: 'app-page-head',
  imports: [RouterLink, TPipe],
  template: `
    <section class="cm-m-pagehead">
      <img class="cm-m-pagehead__bg" src="img/schizzi/schizzo-varco.svg" alt="" width="1200" height="800">
      <div class="cm-container">
        <nav class="cm-m-crumbs" aria-label="Breadcrumb">
          <a routerLink="/">{{ 'nav.home' | t }}</a><span aria-hidden="true">/</span><span>{{ crumb() | t }}</span>
        </nav>
        <span class="cm-eyebrow">{{ eyebrow() | t }}</span>
        <h1 class="cm-display-l">{{ title() | t }}</h1>
        <p class="cm-body-l">{{ intro() | t }}</p>
      </div>
    </section>
  `,
})
export class PageHead {
  readonly crumb = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input.required<string>();
}
