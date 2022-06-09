import {Component} from "@angular/core";

@Component({
  selector: 'app-themes-hero',
  template: `
    <div class="main">
      <app-navbar></app-navbar>
      <div class="container">
        <div class="row h-100">
          <div class=" col-xl-8 col-md-12">
            <div class="d-flex h-100 flex-column justify-content-center">
              <p style="font-size: 1.1rem">KNOW US</p>
              <h1>Themes</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .main {
          height: 80vh;
          background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../../../assets/H3-rec.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          background-attachment: fixed;
      }

      .container {
          height: 50vh;
      }

      * {
          color: white;
      }

      h1 {
          font-size: 5rem;
          font-family: 'Kanit', sans-serif;
      }

      p {
          letter-spacing: 5px;
      }

      @media screen and (max-width: 768px) {
          h1 {
              font-size: 3rem;
          }
      }
  `]
})
export class ThemesHeroComponent {
}
