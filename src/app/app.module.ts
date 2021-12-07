import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { CreatetestcaseComponent } from './testcasecontent/createtestcase/createtestcase.component';
import { EdittestcaseComponent } from './testcasecontent/edittestcase/edittestcase.component';
import { ExecutetestcaseComponent } from './testcasecontent/executetestcase/executetestcase.component';
import { DashboardcontentComponent } from './testcasecontent/dashboardcontent/dashboardcontent.component';
import { TestcasecontentComponent } from './testcasecontent/testcasecontent.component';
import { TestcaseheaderComponent } from './testcasecontent/testcaseheader/testcaseheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    CreatetestcaseComponent,
    EdittestcaseComponent,
    ExecutetestcaseComponent,
    DashboardcontentComponent,
    TestcasecontentComponent,
    TestcaseheaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
