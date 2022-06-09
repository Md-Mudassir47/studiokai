import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home.component";
import {AboutComponent} from "./pages/about.component";
import {HowItWorksComponent} from "./pages/how-it-works.component";
import {ContactComponent} from "./pages/contact.component";
import {ThemesComponent} from "./pages/themes.component";
import {PortfolioComponent} from "./pages/portfolio.component";
import {TeamComponent} from "./pages/team.component";
import {ArtDecoComponent} from "./pages/themes/art-deco.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'themes', component: ThemesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'team', component: TeamComponent},
  {path: 'art', component: ArtDecoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
