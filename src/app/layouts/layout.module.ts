import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutes } from "./layout.routing";

import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';
import { HeaderComponent } from './shared-sections/header/header.component';
import { IntroOneComponent } from './shared-sections/intro-one/intro-one.component';
import { PortfolioComponent } from './shared-sections/portfolio/portfolio.component';
import { ServicesComponent } from './shared-sections/services/services.component';
import { CtaComponent } from './shared-sections/cta/cta.component';
import { PricingsComponent } from './shared-sections/pricings/pricings.component';
import { ContactComponent } from './shared-sections/contact/contact.component';
import { FooterComponent } from './shared-sections/footer/footer.component';
import { TestimonialsComponent } from './shared-sections/testimonials/testimonials.component';
import { PortfolioCarouselComponent } from './shared-sections/portfolio-carousel/portfolio-carousel.component';
import { TestimonialsCarouselComponent } from './shared-sections/testimonials-carousel/testimonials-carousel.component';
import { ServicesCarouselComponent } from './shared-sections/services-carousel/services-carousel.component';

import { WINDOW_PROVIDERS } from '../shared/helpers/window.helper';
//import { TeamComponent } from './shared-sections/team/team.component';
import { TeamsComponent } from './shared-sections/teams/teams.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forChild(LayoutRoutes)
  ],
  declarations: [
    LayoutOneComponent,
    LayoutTwoComponent, 
    HeaderComponent, 
    IntroOneComponent, 
    PortfolioComponent, 
    ServicesComponent, 
    CtaComponent, 
    PricingsComponent, 
    ContactComponent, 
    FooterComponent, 
    TestimonialsComponent, 
    PortfolioCarouselComponent,  
    TestimonialsCarouselComponent, 
    ServicesCarouselComponent, TeamsComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class LayoutModule { }
