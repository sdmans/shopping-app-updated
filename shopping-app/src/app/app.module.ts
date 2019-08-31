import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';//To enable template-driven from features such as ngModel

import { AppRoutingModule } from './app-routing.module';
/* Imported components */
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './components/nav/nav.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';

/* Importing modules for Angular Fire and Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


/* Importing Angular Material Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { SetupComponent } from './components/setup/setup.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    AccountComponent,
    LoginComponent,
    SubmitComponent,
    ProfileComponent,
    NavComponent,
    SubmitFormComponent,
    ListComponent,
    DetailComponent,
    SetupComponent,
    ItemDetailComponent,
    CreateRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//Gives application access to all template-driven forms and features including ngModel
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
