import {Component} from "@angular/core";

@Component({
  selector: 'app-boxes',
  template: `
    <div class="container d-center py-4 boxes-div-container">
      <div class="boxes w-100 d-flex justify-content-around align-items-center">
        <div class="box d-flex align-items-center justify-content-center" style="gap: 1rem">
          <div class="image" style="position:relative;">
            <img src="../../../assets/window-white.png" style="width: 3rem;"/>
            <img src="../../../assets/window-blue.png" style="width: 3rem;position:absolute;left: 0;"/>
          </div>
          <div class="text">
            <p style="font-size: 1rem;">Turnkey Projects</p>
          </div>
        </div>

        <div class="box d-flex align-items-center justify-content-center" style="gap: 1rem">
          <div class="image" style="position:relative;">
            <img src="../../../assets/measuring-white.png" style="width: 3rem;"/>
            <img src="../../../assets/measuring-blue.png" style="width: 3rem;position:absolute;left: 0;"/>
          </div>
          <div class="text">
            <p style="font-size: 1rem;">Designing</p>
          </div>
        </div>

        <div class="box d-flex align-items-center justify-content-center" style="gap: 1rem">
          <div class="image" style="position:relative;">
            <img src="../../../assets/interior-white.png" style="width: 3rem;"/>
            <img src="../../../assets/interior-blue.png" style="width: 3rem;position:absolute;left: 0;"/>
          </div>
          <div class="text d-flex align-items-center justify-content-center">
            <p style="font-size: 1rem;">Architecture</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    p {
      margin: 0;
    }

    .boxes-div-container {
      transform: translateY(-10rem);
      height: 1px;
    }

    .box {
      background: rgba(0, 0, 0, .5);
      padding: 2rem;
      width: auto !important;
      border-radius: 0.5rem;
      transition: 0.5s all;
    }

    .boxes .box:nth-child(2),
    .boxes .box:nth-child(3) {
      padding: 2rem 3rem;
    }

    .box:hover {
      transform: translateY(-10px);
      background-color: white;
    }

    .box p:nth-child(1) {
      color: #98ccd3;
    }

    .box p:nth-child(2) {
      color: grey;
    }

    .box:hover p:nth-child(1) {
      color: black;
    }

    .image img:nth-child(2) {
      z-index: -1
    }

    .box:hover .image img:nth-child(2) {
      z-index: 1;
    }

    @media screen and (max-width: 1200px) {
    }

    @media screen and (max-width: 992px) {
      .boxes-div-container {
        transform: translateY(0);
        height: auto !important;
      }

      .boxes {
        flex-direction: column !important;
        gap: 2rem;
      }

      .box {
        width: 100% !important;
        display: flex !important;
        justify-content: flex-start !important;
      }

      .box p:nth-child(2) {
        color: white !important;
      }
    }

  `]
})
export class BoxesComponent {
}
