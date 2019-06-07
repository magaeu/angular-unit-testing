import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RoutesModule} from './routes/routes.module';

import {AppComponent} from './app.component';
import {QuotesComponent} from './components/quotes/quotes.component';
import {TeamComponent} from './components/team/team.component';
import {HttpClientModule} from '@angular/common/http';
import {AsyncBehaviorComponent} from './components/async-behavior/async-behavior.component';
import {InputOutputComponent} from './components/input-output/input-output.component';
import {InputOutputParentComponent} from './components/input-output/input-output-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    TeamComponent,
    AsyncBehaviorComponent,
    InputOutputComponent,
    InputOutputParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
