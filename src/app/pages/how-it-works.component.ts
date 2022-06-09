import {Component} from "@angular/core";

@Component({
  selector: 'app-how-it-works',
  template: `
    <div style="position: relative">
      <app-how-hero-main></app-how-hero-main>
      <div class="container" style="padding-top: 4rem">
        <div class="d-flex justify-content-center align-items-center flex-column">
          <h2 class="text-center">Perfect solutions & simple processes</h2>
          <p class="text-center" style="width: 50%">All of our processes are designed to put your ideas into
            perspective. So sit back and let your dreams guide you.</p>
        </div>

        <div class="row d-flex align-items-center justify-content-center" style="padding: 3rem 0">
          <div class="image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/book-consultation.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  <img class="img-icon"
                       src="../../assets/icons/book_Icon.webp"/>
                  Book your consultation
                </h2>
                <div>
                  <h4>Talk to your designer and relationship manager</h4>
                  <p>Designer brings together your aesthetic and functional needs to better understand your aesthetic
                    and functional needs.</p>
                </div>
                <div>
                  <h4>First Design Presentation</h4>
                  <p>Within 48 Hours, you'll receive a bespoke design solution including room planning, mood boards and
                    detailed budgets for your dream home, based on which you can continue to pay 10%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center flex-row-reverse" style="padding: 3rem 0">
          <div class="reverse-image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/design.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  <img class="img-icon"
                       src="https://cdn-dobdp.nitrocdn.com/EOBoCcEiFzMGOHgMFgfWPTnqQTdhXpWl/assets/static/optimized/rev-3a30f7f/wp-content/uploads/2021/08/Design_icon.png"/>
                  Design
                </h2>
                <div>
                  <h4>3D design of your home</h4>
                  <p>Design Expert develops a 3D design based on your feedback after the first submission.</p>
                </div>
                <div>
                  <h4>Finalise your design</h4>
                  <p>Presentation of 3D designs for approval, with iterations if necessary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center" style="padding: 3rem 0">
          <div class="image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/production.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  <img class="img-icon"
                       src="https://cdn-dobdp.nitrocdn.com/EOBoCcEiFzMGOHgMFgfWPTnqQTdhXpWl/assets/static/optimized/rev-3a30f7f/wp-content/uploads/2021/08/production_icon.png"/>
                  Production
                </h2>
                <div>
                  <h4>We start procuring materials</h4>
                  <p>Presentation of 3D designs for approval, with iterations if necessary.</p>
                </div>
                <div>
                  <h4>Get ready for installation</h4>
                  <p>Our craftsmen complete the work and prepare for installation after 30 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center flex-row-reverse" style="padding: 3rem 0">
          <div class="reverse-image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/installation.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  <img class="img-icon"
                       src="https://cdn-dobdp.nitrocdn.com/EOBoCcEiFzMGOHgMFgfWPTnqQTdhXpWl/assets/static/optimized/rev-3a30f7f/wp-content/uploads/2021/08/Installation_icon.png"/>
                  Installation
                </h2>
                <div>
                  <h4>Dispatching and installing</h4>
                  <p>All products are shipped from the factory and distributors, arrive at your location and are
                    installed</p>
                </div>
                <div>
                  <h4>Quality Assurance Check</h4>
                  <p>The installation process is completed with a quality control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center" style="padding: 3rem 0">
          <div class="image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/handover.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  <img class="img-icon"
                       src="https://cdn-dobdp.nitrocdn.com/EOBoCcEiFzMGOHgMFgfWPTnqQTdhXpWl/assets/static/optimized/rev-3a30f7f/wp-content/uploads/2021/08/Handover_icon.png"/>
                  Handover
                </h2>
                <div>
                  <h4>Site Inspection</h4>
                  <p>Once all products are installed on site, we conduct a site survey to ensure everything is up to
                    standard.</p>
                </div>
                <div>
                  <h4>Handover Complete</h4>
                  <p>We sign an official transfer document and your home is delivered fully furnished with the guarantee
                    and the service letter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <app-whatsapp></app-whatsapp>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    img {
      width: 25rem;
    }

    .img-icon {
      width: 2.5rem;
    }

    .image-container {
      transform: translateX(5rem);
    }

    .reverse-image-container {
      transform: translateX(-5rem);
    }

    @media screen and (max-width: 992px) {
      .image-container {
        transform: translateX(0);
        display: flex;
        justify-content: center !important;
        padding: 0 !important;
      }

      .reverse-image-container {
        transform: translateX(0);
        display: flex;
        justify-content: center !important;
        padding: 0 !important;
      }

      img {
        max-width: 100%;
        height: auto;
        width: 100%;
      }

      .main-content-container {
        padding: 2rem 0 !important;
      }

      .content-container {
        width: 90% !important;
      }
    }

    @media screen and (max-width: 576px) {
      .image-container {
        padding: 0 .5rem !important;
      }

      .reverse-image-container {
        padding: 0 .5rem !important;
      }

      .main-content-container {
        padding: 1rem .5rem !important;
      }
    }

    @media screen and (max-width: 1400px) {
      p.text-center {
        width: 60%;
      }
    }

    @media screen and (max-width: 1200px) {
      p.text-center {
        width: 70% !important;
      }

      .image-container img {
        height: auto;
        max-width: 100%;
      }

      .reverse-image-container img {
        height: auto;
        max-width: 100%;
      }
    }

    @media screen and (max-width: 764px) {
      p.text-center {
        width: 90% !important;
      }
    }
  `]
})
export class HowItWorksComponent {
}
