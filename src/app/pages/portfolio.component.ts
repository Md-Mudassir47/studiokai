import {Component} from "@angular/core";

@Component({
  selector: 'app-portfolio',
  template: `
    <div>
      <app-portfolio-hero></app-portfolio-hero>
      <div class="container" style="padding-top: 4rem">
        <div class="row d-center">
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FrA4mcJYrBk"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8r9D54n1Rmw"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X-qPFgGPX_I"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CJEfx_Y-TDo"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OHUgXK2GHC0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qpzyLgZTTy0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mIozrrj6_sc"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
          <div class="col-lg-6 d-center video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/C_A8Ed0zRxc"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .video-container {
      padding-bottom: 2rem;
    }
  `]
})
export class PortfolioComponent {
}
