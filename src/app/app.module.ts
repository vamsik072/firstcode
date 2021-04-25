import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StudentsComponent } from "./students/students.component";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app.routing";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(AppRoutes)],
  declarations: [AppComponent, HelloComponent, StudentsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
