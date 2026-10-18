import { Component } from '@angular/core';
import { SITE } from '../../core/site.config';
import { TPipe } from '../../core/t.pipe';
import { Edizione } from '../../shared/edizione';
import { PageHead } from '../../shared/page-head';
import { ProfiloSensoriale } from '../../shared/profilo-sensoriale';
import { SchedaTecnica } from '../../shared/scheda-tecnica';
import { Varco } from '../../shared/varco';

@Component({
  selector: 'app-olio',
  imports: [TPipe, Edizione, PageHead, ProfiloSensoriale, SchedaTecnica, Varco],
  templateUrl: './olio.html',
})
export class OlioPage {
  protected readonly edition = SITE.edition;
  protected readonly uses = [
    { n: 'I', title: 'oilPage.u1Title', text: 'oilPage.u1Text' },
    { n: 'II', title: 'oilPage.u2Title', text: 'oilPage.u2Text' },
    { n: 'III', title: 'oilPage.u3Title', text: 'oilPage.u3Text' },
    { n: 'IV', title: 'oilPage.u4Title', text: 'oilPage.u4Text' },
  ];
}
