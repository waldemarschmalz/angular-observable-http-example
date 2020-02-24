import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableEmployeeComponent } from "./table-employee/table-employee.component";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { EmployeeService } from "./model";

@NgModule({
  declarations: [AppComponent, TableEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    DialogModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
