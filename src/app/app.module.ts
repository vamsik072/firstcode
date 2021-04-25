import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StudentsComponent } from "./students/students.component";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app.routing";
import { CourselistComponent } from './courselist/courselist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(AppRoutes)],
  declarations: [AppComponent, HelloComponent, StudentsComponent, CourselistComponent, CoursedetailsComponent, PagenotfoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
