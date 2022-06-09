import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  template: `
    <div class="h-100" style="position: relative">
      <header>
        <app-navbar></app-navbar>
        <app-hero></app-hero>
      </header>
      <app-we-design></app-we-design>
      <app-our-partners></app-our-partners>
      <app-happy-clients></app-happy-clients>
      <app-info></app-info>
      <app-trust-our-team></app-trust-our-team>
      <app-footer></app-footer>
      <app-whatsapp></app-whatsapp>
    </div>
  `,
  styles: [`
    header {
      height: 100vh;
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../../assets/H1-rec.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      background-attachment: fixed;
      overflow: hidden;
    }
  `]
})
export class HomeComponent {
}
