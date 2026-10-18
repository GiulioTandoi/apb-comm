import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TPipe } from '../../core/t.pipe';
import { PageHead } from '../../shared/page-head';

@Component({
  selector: 'app-storia',
  imports: [RouterLink, TPipe, PageHead],
  templateUrl: './storia.html',
})
export class StoriaPage {
  protected readonly steps = [
    { n: 'I', title: 'storyPage.t1Title', text: 'storyPage.t1Text' },
    { n: 'II', title: 'storyPage.t2Title', text: 'storyPage.t2Text' },
    { n: 'III', title: 'storyPage.t3Title', text: 'storyPage.t3Text' },
  ];
  protected readonly facts = [
    { n: '1240', text: 'storyPage.f1' },
    { n: 'VIII', text: 'storyPage.f2' },
    { n: '1996', text: 'storyPage.f3' },
  ];
}
