import {Component} from "@angular/core";

@Component({
  selector: 'app-team',
  template: `
    <div>
      <app-team-hero></app-team-hero>
      <div class="container">
        <div class="row d-flex align-items-center justify-content-center" style="padding: 3rem 0">
          <div class="image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/mr-dinesh-kumar.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  Mr. Dinesh Kumar Sharma - CEO Founder
                </h2>
                <div>
                  <p>
                    He found Karshni Architects & Interior in 1999 since then he plays a central role in driving all
                    technological innovations that form the backbone of studio kAi while also leading our operations
                    team.
                    Dinesh kumar sharma is graduated from CCS University and have a experience of over 30+ years</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center flex-row-reverse" style="padding: 3rem 0">
          <div class="reverse-image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/ar-kartik-sharma.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  Ar. Kartik sharma - Director | Principal Architect
                </h2>
                <div>
                  <p>He want to create something that gives us
                    meaning and that is connected to our past. . Over the years, Kartik has allowed style to be dictated
                    by knowledge rather than being overwhelmed by market trends. The process was demanding, but he
                    enjoyed every aspect of the household making process. The end result was a house with a soul, and
                    Studio KAi is an extension of that aspect. A graduate of Sunderdeep College, he pursued his passion
                    and completed his post graduated from Sunderdeep College ghaziabad. Kartik has a great passion for
                    design and sincerely believes that design is a candid manifestation of the combined personalities of
                    the people around it</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center" style="padding: 3rem 0">
          <div class="image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/ar-shivani.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  Ar. Shivani - Chief Architect
                </h2>
                <div>
                  <p>
                    Ar. Shivani has extensive experience in designing projects including architecture, masterplanning
                    and interior designing of residences, institutional buildings, industrial buildings, group housing,
                    health care centres and mixed-use developments. ​A passion for architecture to do something unique .
                    Her warm receptive personality and ability to solve complex design challenges in the most simplified
                    way have helped the firm win many hearts and minds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center flex-row-reverse" style="padding: 3rem 0">
          <div class="reverse-image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img src="../../assets/kirti-sharma.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  Kirti sharma - Principal designer
                </h2>
                <div>
                  <p>Times are constantly changing and it is important to keep up to
                    date with the latest trends and designs.graduated from Amity university, she has a creative
                    personality, experiment with new ideas and design also focus on aesthetics.
                    she brings design solution to life and healthy work environment in the office. She has redesigned
                    homes to suit her clients' tastes and vision. She is very happy to help you create the design you
                    have always wanted.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row d-flex align-items-center justify-content-center" style="padding: 3rem 0">
          <div class="image-container col-lg-4 d-flex justify-content-end align-items-center">
            <img style="border-radius: 1rem" src="../../assets/prem-yadav.jpeg"/>
          </div>
          <div class="col-lg-8 main-content-container" style="background-color: #f8f8f8;padding: 4rem">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div class="w-75 content-container">
                <h2 style="padding: 1rem 0">
                  Prem Yadav - Senior Interior Designer
                </h2>
                <div>
                  <p>Senior Interior designer He is a very hard working member of Studio KAi
                    family he has
                    a experience of over 5+ years his vision for designing gives a very unique concept in each and every
                    project which shows his dedication toward his work</p>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    img {
      width: 25rem;
    }

    p {
      text-align: justify;
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
export class TeamComponent {
}
