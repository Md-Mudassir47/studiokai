import {Component} from "@angular/core";

@Component({
  selector: 'app-why-us',
  template: `
    <div class="container main-container">
      <div class="row">
        <div class="col-lg-6 image-container col-md-12 d-flex justify-content-center">
          <img style="position:relative;"
               src="https://preview.colorlib.com/theme/interiordesign/images/ximg_3.jpg.pagespeed.ic.6B3BFR6Z9T.webp"/>
        </div>
        <div class="col-lg-6 col-md-12 accordion-container d-flex justify-content-center flex-column">
          <span>WHY US</span>
          <h1 style="padding-top: 1rem">Why Us</h1>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                  What Should I Do If My Interior Broken?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What Is Your Location?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Robus Building
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  What Should I Do If My Interior Broken?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                   data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                  plugin adds the appropriate classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                  can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    img {
      width: 35rem;
      border-radius: 0.5rem;
    }

    span {
      color: #ff5733;
      font-family: 'Kanit', sans-serif;
    }

    .accordion-container {
      padding-left: 5rem
    }

    .main-container {
      padding: 5rem 0;
    }

    @media screen and (max-width: 1200px) {
      img {
        max-width: 100% !important;
        height: auto !important;
      }
    }

    @media screen and (max-width: 992px) {
      .accordion-container {
        padding: 5.5rem;
      }
    }

    @media screen and (max-width: 769px) {
      .accordion-container {
        padding: 2rem .5rem;
      }
    }

    @media screen and (max-width: 605px) {
      .accordion-container {
        padding: 2rem;
      }

      .image-container {
        padding: 2rem;
      }

      .main-container {
        padding: 0;
      }
    }
  `]
})
export class WhyUsComponent {
}
