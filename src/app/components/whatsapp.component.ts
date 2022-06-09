import {Component} from "@angular/core";

@Component({
  selector: 'app-whatsapp',
  template: `
    <a href="https://web.whatsapp.com/send?text=Hi&phone=919354585559" target="_blank">
      <img class="img-fluid"
           src="https://hulk-prod.s3.ap-south-1.amazonaws.com/Bot_images/logo_whatsapp_png_46044_392a99c808.png"/>
    </a>
  `,
  styles: [`
    a {
      width: 4rem;
      position: fixed;
      background-color: white;
      outline: none;
      border: 1px solid transparent;
      top: 15rem;
      right: 0;
      padding: 0.5rem;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      z-index: 100;
    }
  `]
})
export class WhatsappComponent {
}
