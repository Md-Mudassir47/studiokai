import {Component} from "@angular/core";

@Component({
  selector: 'app-our-partners',
  template: `
    <div class="container" style="padding: 3rem 0">
      <h1 class="text-center d-center main-heading" style="margin-bottom: 3rem;">Our Partners</h1>
      <owl-carousel-o [options]="customOptions">
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/stylam.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/agl.jpeg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/asian-paints.jpg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/century.jpeg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/greatwhite.jpeg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/greenply.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="https://www.havells.com/content/dam/havells/logo.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/kaff.jpeg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/kajaria.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/jaquar.jpg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="https://mtinews.in/assets/media/Kalingastone-Logo1-mti-news.jpg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/philips.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="https://logonoid.com/images/kohler-logo.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/polycab.jpeg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/saint-gobain.jpeg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/somany.jpeg">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/windows.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/our-partners/wipro.png">
          </div>
        </ng-template>
      </owl-carousel-o>
    </div>
  `,
  styles: [`
    img {
      margin: 0 auto;
      max-width: 100%;
      height: 5rem !important;
      box-shadow: none;
      object-fit: contain !important;
      filter: grayscale(1);
      cursor: pointer;
    }

    img:hover {
      filter: grayscale(0);
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
export class OurPartnersComponent {
  customOptions: any = {
    loop: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    responsiveClass: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
}
