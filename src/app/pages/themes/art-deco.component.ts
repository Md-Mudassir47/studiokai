import {Component} from "@angular/core";

@Component({
  selector: 'app-art-deco',
  template: `
    <div class="art-deco">
      <embed src="../../../assets/pdf/ART%20DECO%20STYLE.pdf"/>
    </div>
  `,
  styles: [`
    embed {
      height: 100vh;
      width: 100%;
    }

    div {
      margin: 0 !important;
      padding: 0 !important;
    }
  `]
})
export class ArtDecoComponent {
}
