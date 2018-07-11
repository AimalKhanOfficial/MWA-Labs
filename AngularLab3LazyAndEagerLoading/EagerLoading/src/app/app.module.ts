import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FarmersMarketModule } from './farmers-market/farmers-market.module';
import { FarmersComponentComponent } from './farmers-market/farmers-component/farmers-component.component';
import { ExampleComponentComponent } from './example-component/example-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule, 
    RouterModule.forRoot([
      {
        path: '', component: ExampleComponentComponent
      },
      {
        path: 'farmers', component: FarmersComponentComponent
      } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
