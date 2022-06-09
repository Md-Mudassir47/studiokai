import {Component} from "@angular/core";

@Component({
  selector: 'app-footer',
  template: `
    <section fxLayout="row" fxLayoutAlign="center center">
      <div class="content-container" style="width: 100%" fxLayout="row" fxLayoutAlign="center center">
        <div class="first" style="width: 100%" fxLayout="row" fxLayoutAlign="space-around">
          <div class="first-list give-padding">
            <h2>Company</h2>
            <ul style="padding: 0">
              <li><a href="#">Home</a></li>
              <li><a href="/how-it-works">How It Works</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="second-list give-padding">
            <h2>Social Media</h2>
            <ul style="padding: 0">
              <li><a href="https://www.facebook.com/karshniarchitectsandinterior" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
                Facebook
              </a></li>
              <li><a href="https://www.linkedin.com/in/karshni-architects-246767187/" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
                Linked In
              </a></li>
              <li><a href="https://instagram.com/karshniarchitectsinterior?utm_medium=copy_link" target="_blank">
                <i class="fa-brands fa-instagram"></i>
                Instagram
              </a></li>
              <li><a href="https://www.youtube.com/channel/UCKaN3TU_IbC6Jcg-x02HYGw" target="_blank">
                <i class="fa-brands fa-youtube"></i>
                Youtube
              </a></li>
            </ul>
          </div>
          <div class="newsLetter give-padding" style="width: 40%;" fxLayout="column" fxLayoutGap="1.2rem">
            <h2>Studio KAi</h2>
            <a href="https://goo.gl/maps/mPSTf5JVHePfDuKS7" target="_blank"><i class="fa-solid fa-location-dot"></i> View Location</a>
            <a href="mailto:karshniarchitects@gmail.com"><i class="fa-solid fa-envelope"></i>
              karshniarchitects@gmail.com</a>
            <p fxLayout="column">
              <a href="tel:08287179728"><i class="fa-solid fa-phone"></i>08287179728</a>
              <a href="tel:09899618121" style="padding-left: 1.4rem">09899618121</a>
              <a href="tel:09911618121" style="padding-left: 1.4rem">09911618121</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      background: #28313b;
      background-image: url('../../../assets/banner-shape.png');
      background-image: url('../../../assets/banner-shape.png'), linear-gradient(#28313b, #28313b);
      color: white;
      padding: 2rem;
    }

    .first {
      flex-wrap: wrap;
    }

    a {
      color: white;
      text-decoration: none;
    }

    li {
      list-style: none;
      line-height: 2rem;
    }

    .first-list,
    .second-list,
    .third-list {
      flex-wrap: wrap;
    }

    .give-padding {
      padding: 2rem;
    }

    i {
      padding-right: .5rem;
    }

    @media screen and (max-width: 1100px) {
      /*.first {*/
      /*  width: 100% !important;*/
      /*  place-content: flex-start !important;*/
      /*}*/
      /*.newsLetter {*/
      /*  width: 35rem !important;*/
      /*}*/
      section {
        padding: 0;
      }
    }

    @media screen and (max-width: 768px) {
      .first-list,
      .second-list {
        display: none;
      }

      .newsLetter {
        width: 90% !important;
      }
    }
  `]
})
export class FooterComponent {
}
