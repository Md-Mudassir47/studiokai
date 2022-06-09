import {Component} from "@angular/core";

@Component({
  selector: 'app-red-circle',
  template: `
    <div class="container" style="padding: 1rem 0">
      <div class="row flex-div">
        <div class="col-lg-4 col-md-6 py-4">
          <div class="d-flex padding-div">
            <div class="img" style="margin-right: 1rem;position:relative;">
              <img src="../../../assets/interior-black.png" style="width: 3.5rem"/>
            </div>
            <div class="content">
              <h4>Turnkey Projects</h4>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 py-4">
          <div class="d-flex padding-div">
            <div class="img" style="margin-right: 1rem;position:relative;">
              <img src="../../../assets/interior-black.png" style="width: 3.5rem"/>
            </div>
            <div class="content">
              <h4>Designing</h4>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 py-4">
          <div class="d-flex padding-div">
            <div class="img" style="margin-right: 1rem;position:relative;">
              <img src="../../../assets/interior-black.png" style="width: 3.5rem"/>
            </div>
            <div class="content">
              <h4>Architecture</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  `,
  styles: [`
    .img::before {
      content: '';
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: -1;
      left: -1rem;
      top: -1rem;
      border-radius: 50%;
      background-color: #ff5733;
    }

    .flex-div {
      display: flex !important;
      flex-wrap: wrap !important;
    }

    .padding-div {
      padding: 0.5rem;
    }

    @media screen and (max-width: 1200px) {
      .padding-div {
        padding: 0;
      }
    }

    @media screen and (max-width: 576px) {
      .padding-div {
        padding: 1rem;
      }
    }
  `]
})
export class RedCircleComponent {
}
