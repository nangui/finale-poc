import { Component, OnInit, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* eslint-disable */

const URL = 'http://localhost:4900/ex-project-mfe.js';

@Component({
  standalone: true,
  selector: 'finale-poc-nx-welcome',
  template: `<app-ex-project></app-ex-project>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.loadScript(URL);
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
