import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminPropertiesComponent } from './admin/admin-properties/admin-properties.component';
import { HomeComponent } from './home/home.component';
import { SinglePropertyComponent } from './single-property/single-property.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path : 'admin/login',
  component : AdminSigninComponent
  },
  {path : 'admin/dashboard',
  canActivate : [AuthGuardService],
  component : AdminDashboardComponent
  },
  {path : 'home',
  component : HomeComponent
  },
  {path : 'property/:id',
  component : SinglePropertyComponent
  },
  {path : '',
  component : HomeComponent
  },
  {path : '**',
  component : HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminSigninComponent,
    AdminDashboardComponent,
    AdminPropertiesComponent,
    HomeComponent,
    SinglePropertyComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
