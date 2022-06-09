import {Component} from "@angular/core";

@Component({
  selector: 'app-info',
  template: `
    <div style="background-color: #f1f2f6;padding: 4rem 0">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img class="img-fluid" src="../../../assets/info.jpg" alt="img">
          </div>
          <div class="col-lg-6 d-center main-cards-container">
            <div
              class="row d-flex align-items-center justify-content-center justify-content-md-between align-items-md-between justify-content-sm-between align-items-sm-between">
              <div class="col-lg-6 col-md-6 main-card-container">
                <div class="d-center main-card flex-column">
                  <img style="width: 4rem" src="../../../assets/icons/key.png" class="img-fluid"/>
                  <h5>Turnkey Projects</h5>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 main-card-container">
                <div class="d-center main-card flex-column">
                  <img style="width: 4rem" src="../../../assets/icons/design-thinking.png" class="img-fluid"/>
                  <h5>Designing</h5>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 margin-container">
                <div class="d-center main-card flex-column">
                  <img style="width: 4rem" src="../../../assets/icons/plan.png" alt="bulb" class="img-fluid"/>
                  <h5>Architecture</h5>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 margin-container">
                <div class="d-center main-card flex-column">
                  <img style="width: 4rem" src="../../../assets/icons/consulting.png" class="img-fluid"/>
                  <h5>Interior Design Consultation</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h5 {
      text-align: center;
    }

    .main-card {
      background-color: white;
      padding: 4rem 0.5rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
      gap: 1rem;
      transition: 0.5s all ease-in-out;
      height: 240px;
    }

    .main-card:hover {
      transform: translateY(-1rem);
      box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    }

    .main-card-container {
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
      .main-card {
        margin-top: 2rem;
      }

      .margin-container {
        margin-bottom: 2rem;
      }
    }

    @media screen and (max-width: 992px) {
      .main-cards-container {
        margin-top: 2rem;
      }
    }
  `]
})

export class InfoComponent {
}
