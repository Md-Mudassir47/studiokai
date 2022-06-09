import {Component} from "@angular/core";

@Component({
  selector: 'app-happy-clients',
  template: `
    <div style="padding: 5rem 0">
      <div class="container">
        <h2 class="text-center d-center main-heading" style="margin-bottom: 2rem">Our Happy Clients</h2>
        <div class="row">
          <div class="col-lg-4" style="margin-top: 2rem">
            <div class="d-flex px-2 flex-column align-items-center justify-content-center">
              <img src="../../../assets/anmol-sir.jpeg"/>
              <h3 class="py-3">Mr. Anmol Garg</h3>
              <div class="content d-center">
                My experience with Studio Kai is very friendly the way they design you space and give a creative aspect
                to each and every corner of my house . they design what i wanted totally recommended .
              </div>
            </div>
          </div>
          <div class="col-lg-4" style="margin-top: 2rem">
            <div class="d-flex px-2 flex-column align-items-center justify-content-center">
              <img src="../../../assets/mr-gupta.jpeg"/>
              <h3 class="py-3">Mr & Mrs. Gupta</h3>
              <div class="content d-center">
                Hats off to the entire team at Studio Kai they designed the house that we really wanted.
              </div>
            </div>
          </div>
          <div class="col-lg-4" style="margin-top: 2rem">
            <div class="d-flex px-2 flex-column align-items-center justify-content-center">
              <img src="../../../assets/mis-pooja.jpeg"/>
              <h3 class="py-3">Ms. Pooja</h3>
              <div class="content">
                Our experience with Studio Kai was nice thanks to the project managers. They worked so much on this
                project,and finished it on time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    img {
      border-radius: 50%;
      width: 6rem;
    }

    .content {
      text-align: center;
    }

    .main-heading {
      position: relative;
      padding-bottom: 1rem;
    }

    .main-heading::before {
      position: absolute;
      content: '';
      width: 10rem;
      background-color: #98ccd3;
      height: 0.3rem;
      bottom: 0;
      border-radius: 1rem;
    }
  `]
})
export class HappyClientsComponent {
}
