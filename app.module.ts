import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireStorage} from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';

import { CurrentworkComponent } from './currentwork/currentwork.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ProgressComponent } from './progress/progress.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { TrainingModuleComponent } from './TrainingModule/trainingmodule.component';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './Services/user.service';
import { AuthGuard } from './Services/auth-gaurd.service';
import { CompletedComponent } from './completed/completed.component';
import { JavaquizComponent } from './quizzes/Javaquiz/Javaquiz.component';
import { AngularquizComponent } from './quizzes/Angularquiz/Angularquiz.component';
import { ReactquizComponent } from './quizzes/Reactquiz/Reactquiz.component';
import { CSSquizComponent } from './quizzes/CSSquiz/CSSquiz.component';
import { HTMLquizComponent } from './quizzes/HTMLquiz/HTMLquiz.component';
import { TrainingmaterialsComponent } from './TrainingModule/Trainingmaterials/Trainingmaterials.component'
import { JavaComponent } from './TrainingModule/Java/Java.component';
import { Angular2Component } from './TrainingModule/Angular2/Angular2.component';
import { Angular2IntroComponent } from './TrainingModule/Angular2/Angular2_Intro.component';
import { Angular2OverviewComponent } from './TrainingModule/Angular2/Angular2_Overview.component';
import { Angular2EnvironmentComponent } from './TrainingModule/Angular2/Angular2_environment.component';
import { Angular2VideoComponent } from './TrainingModule/Angular2/Angular2_video.component';
import { Angular2FileComponent } from './TrainingModule/Angular2/Angular2_file.component';
import { Angular2ArchitectureComponent } from './TrainingModule/Angular2/Angular2_architecture.component';
import { Angular2ComponentComponent } from './TrainingModule/Angular2/Angular2_Component.component';
import { Angular2DirectiveComponent } from './TrainingModule/Angular2/Angular2_directive.component';
import { Angular2ErrorHandlingComponent } from './TrainingModule/Angular2/Angular2_errorhandling.component';
import { Angular2FormComponent } from './TrainingModule/Angular2/Angular2_form.component';
import { Angular2ModulesComponent } from './TrainingModule/Angular2/Angular2_modules.component';
import { Angular2NavigationComponent } from './TrainingModule/Angular2/Angular2_navigation.component';
import { Angular2RoutingComponent } from './TrainingModule/Angular2/Angular2_routing.component';
import { Angular2UserInputComponent } from './TrainingModule/Angular2/Angular2_userinput.component';
import { AdminComponent } from './Admin/admin.component';
import { VideoDataService } from './Services/videoData.service';
import {ReactiveFormsModule} from '@angular/forms';
import { NgBoostrapDropdownDirective } from './Services/ng-boostrap-dropdown.directive';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingModuleComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'quiz/:name', component: QuizzesComponent },
  { path: 'complete', component: CompletedComponent },
  { path: 'contributions', component: ContributionsComponent },
  { path: 'current', component: CurrentworkComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/:key', component: AdminComponent },
  { path: 'JavaQuiz', component: JavaquizComponent },
  { path: 'AngularQuiz', component: AngularquizComponent },
  { path: 'ReactQuiz', component: ReactquizComponent },
  { path: 'HTMLQuiz', component: HTMLquizComponent },
  { path: 'CSSQuiz', component: CSSquizComponent },
  { path: 'training/:name', component: TrainingmaterialsComponent },
  { path: 'training/:name/Java', component: JavaComponent },
  { path: 'training/:name/Angular2', component: Angular2Component },
  { path: 'training/:name/Angular2/Intro', component: Angular2IntroComponent },
  { path: 'training/:name/Angular2/Intro/overview', component: Angular2OverviewComponent },
  { path: 'training/:name/Angular2/Intro/environment', component: Angular2EnvironmentComponent },
  { path: 'training/:name/Angular2/video', component: Angular2VideoComponent },
  { path: 'training/:name/Angular2/files', component: Angular2FileComponent },
  { path: 'training/:name/Angular2/Intro/architecture', component: Angular2ArchitectureComponent },
  { path: 'training/:name/Angular2/Intro/component', component: Angular2ComponentComponent },
  { path: 'training/:name/Angular2/Intro/directive', component: Angular2DirectiveComponent },
  { path: 'training/:name/Angular2/Intro/errorhandling', component: Angular2ErrorHandlingComponent },
  { path: 'training/:name/Angular2/Intro/form', component: Angular2FormComponent },
  { path: 'training/:name/Angular2/Intro/modules', component: Angular2ModulesComponent },
  { path: 'training/:name/Angular2/Intro/navigation', component: Angular2NavigationComponent },
  { path: 'training/:name/Angular2/Intro/routing', component: Angular2RoutingComponent },
  { path: 'training/:name/Angular2/Intro/userinput', component: Angular2UserInputComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];
// export const fireBaseConfig = {
//   apiKey: "AIzaSyADwHpihuPpFcroBEeLTmojCUooCdhxbkk",
//     authDomain: "sportswelfare-d7124.firebaseapp.com",
//     databaseURL: "https://sportswelfare-d7124.firebaseio.com",
//     projectId: "sportswelfare-d7124",
//     storageBucket: "sportswelfare-d7124.appspot.com",
//     messagingSenderId: "335121115507"
// };

export const fireBaseConfig = {
  apiKey: "AIzaSyCsnPfIXn_rkAnn7zD55y5HKa5pU88ogOQ",
  authDomain: "software-5bf94.firebaseapp.com",
  databaseURL: "https://software-5bf94.firebaseio.com",
  projectId: "software-5bf94",
  storageBucket: "software-5bf94.appspot.com",
  messagingSenderId: "796233458106"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CurrentworkComponent,
    QuizzesComponent,
    ProgressComponent,
    ContributionsComponent,
    TrainingModuleComponent,
    MenuComponent,
    CompletedComponent,
    JavaquizComponent,
    AngularquizComponent,
    ReactquizComponent,
    CSSquizComponent,
    HTMLquizComponent,
    AdminComponent,
    TrainingmaterialsComponent,
    JavaComponent,
    Angular2Component,
    Angular2IntroComponent,
    Angular2OverviewComponent,
    Angular2EnvironmentComponent,
    Angular2FileComponent,
    Angular2VideoComponent,
    Angular2ArchitectureComponent,
    Angular2ComponentComponent,
    Angular2DirectiveComponent,
    Angular2ErrorHandlingComponent,
    Angular2FormComponent,
    Angular2ModulesComponent,
    Angular2NavigationComponent,
    Angular2RoutingComponent,
    Angular2UserInputComponent,
    NgBoostrapDropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthGuard, VideoDataService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
