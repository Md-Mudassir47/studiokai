import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./components/layout/navbar.component";
import {HomeComponent} from "./pages/home.component";
import {BoxesComponent} from "./containers/home/boxes.component";
import {HeroComponent} from "./containers/home/hero.component";
import {RedCircleComponent} from "./containers/home/red-circle.component";
import {AboutComponent} from "./pages/about.component";
import {AboutHeroMainComponent} from "./containers/about/about-hero-main.component";
import {WhyUsComponent} from "./containers/home/why-us.component";
import {HowItWorksComponent} from "./pages/how-it-works.component";
import {HowHeroMainComponent} from "./containers/how-it-works/how-hero-main.component";
import {FooterComponent} from "./components/layout/footer.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ContactComponent} from "./pages/contact.component";
import {ContactHeroMainComponent} from "./containers/contact/contact-hero-main.component";
import {AboutMainComponent} from "./containers/about/about-main.component";
import {WhatsappComponent} from "./components/whatsapp.component";
import {WeDesignComponent} from "./containers/home/we-design.component";
import {ThemesComponent} from "./pages/themes.component";
import {ThemesHeroComponent} from "./containers/themes/themes-hero.component";
import {PortfolioComponent} from "./pages/portfolio.component";
import {PortfolioHeroComponent} from "./containers/portfolio/portfolio-hero.component";
import {TeamComponent} from "./pages/team.component";
import {TeamHeroComponent} from "./containers/team/team-hero.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ArtDecoComponent} from "./pages/themes/art-deco.component";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {TabViewModule} from "primeng/tabview";
import {CarouselModule} from "ngx-owl-carousel-o";
import {OurPartnersComponent} from "./containers/home/our-partners.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InfoComponent} from "./containers/home/info.component";
import {HappyClientsComponent} from "./containers/home/happy-clients.component";
import {TrustOurTeamComponent} from "./containers/home/trust-our-team.component";                  //api

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    BoxesComponent,
    RedCircleComponent,
    AboutComponent,
    AboutHeroMainComponent,
    WhyUsComponent,
    HowItWorksComponent,
    HowHeroMainComponent,
    FooterComponent,
    ContactComponent,
    ContactHeroMainComponent,
    AboutMainComponent,
    WhatsappComponent,
    WeDesignComponent,
    ThemesComponent,
    ThemesHeroComponent,
    PortfolioComponent,
    PortfolioHeroComponent,
    TeamComponent,
    TeamHeroComponent,
    ArtDecoComponent,
    OurPartnersComponent,
    InfoComponent,
    HappyClientsComponent,
    TrustOurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AccordionModule,
    TabViewModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
