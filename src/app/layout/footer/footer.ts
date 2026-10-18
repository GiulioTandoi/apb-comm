import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/site.config';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TPipe],
  template: `
    <footer class="cm-footer cm-m-footer" data-theme="dark">
      <img class="cm-m-wall" src="img/schizzi/schizzo-muretto-pietra.svg" alt="">
      <div class="cm-container">
        <div class="cm-footer__grid">
          <div class="cm-footer__logo">
            <img src="img/logo/pilieri-logotipo-verticale-pietra.svg" alt="Corona di Murgia" width="220" height="196">
          </div>
          <div>
            <h4>{{ 'footer.explore' | t }}</h4>
            <ul>
              <li><a routerLink="/storia">{{ 'nav.story' | t }}</a></li>
              <li><a routerLink="/olio">{{ 'nav.oil' | t }}</a></li>
              <li><a routerLink="/" fragment="edizione">{{ 'footer.newsletter' | t }}</a></li>
              <li><a routerLink="/ospitalita">{{ 'nav.stay' | t }}</a></li>
            </ul>
          </div>
          <div>
            <h4>{{ 'footer.contacts' | t }}</h4>
            <ul>
              <li>{{ site.contacts.address }}</li>
              <li><a [href]="'mailto:' + site.contacts.email">{{ site.contacts.email }}</a></li>
              <li>{{ site.contacts.phone }}</li>
            </ul>
          </div>
          <div>
            <h4>{{ 'footer.follow' | t }}</h4>
            <ul>
              <li><a [href]="site.social.instagram" target="_blank" rel="noopener">Instagram</a></li>
              <li><a [href]="site.social.facebook" target="_blank" rel="noopener">Facebook</a></li>
              <li><a [href]="site.agriturismoUrl" target="_blank" rel="noopener">{{ 'stay.agriTitle' | t }}</a></li>
              <li><a [href]="site.bnbUrl" target="_blank" rel="noopener">{{ 'stay.bnbTitle' | t }}</a></li>
            </ul>
          </div>
        </div>
        <div class="cm-footer__legal">
          <span>© {{ year }} {{ site.name }} · {{ site.legal.companyName }} · {{ site.legal.vat }}</span>
          <span><a href="#">{{ 'footer.privacy' | t }}</a> · <a href="#">{{ 'footer.cookies' | t }}</a></span>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly site = SITE;
  protected readonly year = new Date().getFullYear();
}
