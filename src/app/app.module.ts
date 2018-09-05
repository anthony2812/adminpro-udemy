import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas se coloca en imports
import { APP_ROUTES } from './app.routes';

// modulos se colocan en imports
import { PagesModule } from './pages/pages.module';

// temporal
import { FormsModule } from '@angular/forms';

// componentes se colocan en declarations
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// servicios se colocan en providers
import { ServiceModule } from './services/service.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
