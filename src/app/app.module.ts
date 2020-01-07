import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { BasicPipe } from './shared//basic-pipe.pipe';
import { BasicClass } from 'src/app/shared/basic-class';
import { BasicDirective } from './shared/basic-directive.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    BasicPipe,
    BasicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BasicClass],
  bootstrap: [AppComponent]
})
export class AppModule {

}
