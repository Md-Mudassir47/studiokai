import {Component} from "@angular/core";

@Component({
  selector: 'app-trust-our-team',
  template: `
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-6 image-container">
          <img class="img-fluid" src="../../../assets/trust_image-home.webp" alt="trust-our-team-image">
        </div>
        <div class="col-lg-6">
          <div class="row d-center">
            <div class="col-lg-10" style="padding: 0 !important;">
              <h3 class="heading">Trust Our Team Of Experts to Deliver</h3>
            </div>
            <ol class="col-lg-12 d-center flex-column">
              <li>
                <h4>
                  We understand you and your needs
                </h4>
                <p>
                  We understand your need and we interpret your story, deliver it through our design.
                </p>
              </li>

              <li>
                <h4>
                  Perfection in every step
                </h4>
                <p>With international expertise and proof of delivery with 2000+ homes, we strive for perfection.</p>
              </li>

              <li>
                <h4>
                  We use only the best to build
                </h4>
                <p>Materials, finishes, brands – we use only the best. Hettich, Havells, Gobain etc – at the best
                  prices.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .heading {
      word-spacing: 0.5rem;
    }

    li:nth-child(1) {
      list-style-type: '01.' !important;
    }

    li:nth-child(2) {
      list-style-type: '02.' !important;
    }

    li:nth-child(3) {
      list-style-type: '03.' !important;
    }

    ::marker {
      color: #98ccd3;
      font-size: 1.5rem;
    }

    ol {
      padding-left: 5rem;
    }

    li {
      padding-top: 0.5rem;
      padding-left: 1rem;
    }

    @media screen and (max-width: 992px) {
      .heading {
        display: none;
      }

      ol {
        padding: 0 3rem !important;
      }
    }
  `]
})
export class TrustOurTeamComponent {
}

// Decrease the font size of hero home section at 576px to 2rem
// Display none of heading at 992px
// Try to close the tab view into a container to fix Vintage at last
