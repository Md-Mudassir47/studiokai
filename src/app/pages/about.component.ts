import {Component} from "@angular/core";

@Component({
  selector: 'app-about',
  template: `
    <div style="position: relative;">
      <app-about-hero-main></app-about-hero-main>
      <app-about-main></app-about-main>
      <app-footer></app-footer>
      <app-whatsapp></app-whatsapp>
    </div>
  `,
  styles: [``]
})
export class AboutComponent {
}
