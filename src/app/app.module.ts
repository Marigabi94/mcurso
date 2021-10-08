import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

import { environment } from '@env/environment';
import { RouteReusableStrategy, ApiPrefixInterceptor, ErrorHandlerInterceptor, SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { PerfilComponent } from './perfil/perfil.component';
import { HcomprasComponent } from './perfil/hcompras/hcompras.component';
import { AjustesComponent } from './perfil/ajustes/ajustes.component';
import { CalendarioComponent } from './perfil/calendario/calendario.component';
import { CursosComponent } from './perfil/cursos/cursos.component';
import { AperfilComponent } from './perfil/aperfil/aperfil.component';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    FlexLayoutModule,
    MatCarouselModule.forRoot(),
    ReactiveFormsModule,
    MaterialFileInputModule,
    FullCalendarModule,
  ],
  declarations: [
    AppComponent,
    PerfilComponent,
    HcomprasComponent,
    AjustesComponent,
    CalendarioComponent,
    CursosComponent,
    AperfilComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
