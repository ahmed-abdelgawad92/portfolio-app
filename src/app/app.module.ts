import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { WorksComponent } from './home/works/works.component';
import { WorkItemComponent } from './home/works/work-item/work-item.component';
import { CertificationsComponent } from './home/certifications/certifications.component';
import { CertificationItemComponent } from './home/certifications/certification-item/certification-item.component';
import { CvHeaderComponent } from './cv/cv-header/cv-header.component';
import { CvPersonalInformationComponent } from './cv/cv-personal-information/cv-personal-information.component';
import { InfoItemComponent } from './cv/cv-personal-information/info-item/info-item.component';
import { CvSkillsComponent } from './cv/cv-skills/cv-skills.component';
import { CvSkillItemComponent } from './cv/cv-skill-item/cv-skill-item.component';
import { CvTimeHistoryComponent } from './cv/cv-time-history/cv-time-history.component';
import { CvTimeHistoryItemComponent } from './cv/cv-time-history/cv-time-history-item/cv-time-history-item.component';
import { CvHobbysComponent } from './cv/cv-hobbys/cv-hobbys.component';
import { CvHobbyItemComponent } from './cv/cv-hobbys/cv-hobby-item/cv-hobby-item.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeService } from './home.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AboutMeComponent,
    WorksComponent,
    WorkItemComponent,
    CertificationsComponent,
    CertificationItemComponent,
    CvHeaderComponent,
    CvPersonalInformationComponent,
    InfoItemComponent,
    CvSkillsComponent,
    CvSkillItemComponent,
    CvTimeHistoryComponent,
    CvTimeHistoryItemComponent,
    CvHobbysComponent,
    CvHobbyItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
