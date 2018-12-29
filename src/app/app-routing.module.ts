import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent , data: {title: "Ahmed's Portfolio", animation: 1}},
    { path: 'cv', component: CvComponent , data: {title: "CV", animation: 2}},
    { path: 'page-not-found', component: PageNotFoundComponent , data: { title: "Page not found" }},
    { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
