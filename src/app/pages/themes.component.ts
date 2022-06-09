import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-themes',
  template: `
    <div>
      <app-themes-hero></app-themes-hero>
      <div class="container">
        <p-tabView [scrollable]="true">
          <p-tabPanel header="Art Deco">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-1.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-2.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-3.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-4.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-5.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-6.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-7.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-8.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-9.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-10.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-11.jpg"/>
                </div>
                <div class="col-lg-6">
                  <img class="img-fluid" src="../../assets/themes/art-deco/art-deco-12.jpg"/>
                </div>
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Classic">
            <div class="row">
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-1.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-2.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-3.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-4.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-5.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-6.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-7.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-8.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-9.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/classic-style/classic-10.jpg"/>
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Contemporary">
            <div class="row">
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/contemporary/contemporary-1.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/contemporary/contemporary-2.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/contemporary/contemporary-3.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/contemporary/contemporary-4.jpg"/>
              </div>
              <div class="col-lg-6">
                <img class="img-fluid" src="../../assets/themes/contemporary/contemporary-5.jpg"/>
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Indrustrial Edge">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-9.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-10.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-11.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-12.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/industrial/industrial-13.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Mid Century Modern Style">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/mid-century/mid-century-9.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Minimalistic">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/minimalistic/minimalistic-8.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Modern Boho">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-9.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-10.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-11.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-12.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-13.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-14.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-15.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-16.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-boho/modern-boho-17.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Modern Elegance">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-9.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-10.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-11.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-elegance/modern-elegance-12.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Modern European">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-european/modern-European-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-european/modern-European-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/modern-european/modern-European-3.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Moroccan">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-9.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-10.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-11.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-12.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-13.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-14.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-15.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/moroccan/Moroccan-16.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Rustic">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/rustic/rustic-9.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Scandinavian">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/scandinavian/Scandinavian-9.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Urban">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-8.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-9.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/urban/urban-10.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
          <p-tabPanel header="Vintage">
            <div class="row">
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-1.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-2.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-3.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-4.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-5.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-6.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-7.jpg" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <img src="../../assets/themes/vintage/vintage-8.jpg" class="img-fluid">
              </div>
            </div>
          </p-tabPanel>
        </p-tabView>

      </div>

      <app-whatsapp></app-whatsapp>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    a {
      font-size: 1rem;
      line-height: 2rem;
    }

    .col-lg-6 img {
      margin: 2rem 0;
    }

    p-tabPanel {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .inner img {
      transition: all 0.5s ease-in-out;
    }

    .inner:hover img {
      transform: scale(1.1);
    }

    .p-tabpanel-13-label {
      margin-right: 4rem !important;
    }

    * {
      border-color: transparent !important;
    }
  `]
})
export class ThemesComponent {

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 5
      },
      940: {
        items: 10
      }
    },
    nav: true
  }

  constructor(private router: Router) {
  }

  artDecoNavigate() {
    this.router.navigate(['art'])
  }
}
