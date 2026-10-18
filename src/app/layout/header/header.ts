import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { I18nService } from '../../core/i18n.service';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TPipe],
  templateUrl: './header.html',
})
export class Header {
  protected readonly i18n = inject(I18nService);
  private readonly router = inject(Router);

  private readonly url = toSignal(
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd), map(e => e.urlAfterRedirects)),
    { initialValue: this.router.url },
  );
  private readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  /** Sopra la foto della homepage l'header è trasparente; altrove (o dopo lo scroll) è solido. */
  protected readonly overlay = computed(() => this.url().split(/[?#]/)[0] === '/' && !this.scrolled() && !this.menuOpen());

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 40); }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  closeMenu(): void { this.menuOpen.set(false); }
}
