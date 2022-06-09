import {Component} from "@angular/core";

@Component({
  selector: 'app-hero',
  template: `
    <div class="container" style="height: 84%">
      <div class="row h-100">
        <div class="col-xl-8 col-lg-7 col-md-8">
          <div class="d-flex justify-content-center flex-column h-100">
            <h2>home interior designs, innovations in design| studio kai</h2>
            <div>
              <a href="/contact">
                <button>Book Free Consultation</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    * {
      color: white;
    }

    h2 {
      text-transform: capitalize;
      font-family: 'Roboto', sans-serif;
      font-size: 2.5rem;
      letter-spacing: 2px;
    }

    button {
      background-color: white;
      color: black;
      border: 2px solid white;
      outline: none;
      padding: 1rem;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
      font-size: 1rem;
      margin-top: 2rem;
      transition: 0.5s all;
    }

    button:hover {
      background-color: transparent;
      color: white;
      font-weight: bold;
    }

    @media screen and (max-width: 576px) {
      h2 {
        font-size: 2rem;
      }
    }
  `]
})

export class HeroComponent {
}


// 972
