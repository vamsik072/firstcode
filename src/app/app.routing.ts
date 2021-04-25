import { Routes } from "@angular/router";
import { CoursedetailsComponent } from "./coursedetails/coursedetails.component";
import { CourselistComponent } from "./courselist/courselist.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { StudentsComponent } from "./students/students.component";

export const AppRoutes: Routes = [
  { path: "students", component: StudentsComponent },
  { path: "coursedetails", component: CoursedetailsComponent },
  { path: "courselist", component: CourselistComponent },
  { path: "coursedetails/:id", component: CourselistComponent },
  { path: "**", component: PagenotfoundComponent }
];
