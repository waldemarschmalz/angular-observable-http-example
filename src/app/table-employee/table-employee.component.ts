import { Component, OnInit } from "@angular/core";
import { Employee, EmployeeService } from "src/app/model";

@Component({
  selector: "app-table-employee",
  templateUrl: "./table-employee.component.html",
  styleUrls: ["./table-employee.component.css"]
})
export class TableEmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  public fetchEmployees() {
    this.employeeService.getEmployees().subscribe(
      employees => (this.employees = employees),
      error => console.log("ERROR: " + error)
    );
  }
}
