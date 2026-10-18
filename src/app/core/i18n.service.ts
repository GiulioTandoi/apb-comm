import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Lang, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'cdm-lang';

/** Lingua del sito (IT di default, EN a scelta) con un dizionario a chiavi puntate: t('hero.text'). */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  readonly lang = signal<Lang>(this.initialLang());
  private readonly dict = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage non disponibile */ }
    });
  }

  set(lang: Lang): void { this.lang.set(lang); }

  t(key: string): string {
    let node: unknown = this.dict();
    for (const part of key.split('.')) {
      node = (node as Record<string, unknown> | undefined)?.[part];
    }
    return typeof node === 'string' ? node : key;
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'it' || saved === 'en') return saved;
    } catch { /* storage non disponibile */ }
    return 'it';
  }
}
