import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {CreatetestcaseComponent} from './testcasecontent/createtestcase/createtestcase.component';
import {EdittestcaseComponent} from './testcasecontent/edittestcase/edittestcase.component';
import {ExecutetestcaseComponent} from './testcasecontent/executetestcase/executetestcase.component';
import {TestcasecontentComponent} from './testcasecontent/testcasecontent.component';
import {DashboardcontentComponent} from './testcasecontent/dashboardcontent/dashboardcontent.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'landing', component: LandingComponent},
  {
    path: 'dashboard', component: TestcasecontentComponent, children: [
      {path: '', component: DashboardcontentComponent},
      {path: 'createTestCase', component: CreatetestcaseComponent},
      {path: 'editTestcase', component: EdittestcaseComponent},
      {path: 'executeTestcase', component: ExecutetestcaseComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
