import { Component } from '@angular/core';
import { Emp } from './emp';
// import { EmpService } from './emp.service';
import { Emp1Service } from './emp1.service';
// import { EmpserviceService } from './empservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emps:Emp[]=[]
  emp:any;
  id:string="";
  name:string=""
  salary:string=""
  id1:string="";
   constructor(private empService:Emp1Service){
      
   }

   fetch(){
      this.empService.getEmps().subscribe(data=>{
         this.emps =data
      })

   }
   insert(){
     
      this.emp = new Emp(this.id,this.name,this.salary)
      
      this.empService.addEmp(this.emp)
     
   }
   delete(i:number)
   {
      this.id1 = this.emps[i].id
       this.empService.deleteEmp(this.id1);
       this.fetch()
   }
   edit(i:number)
   {
     this.id= this.emps[i].id
    this.name = this.emps[i].name 
     this.salary =  this.emps[i].salary

   }
   update(){
      this.emp = new Emp(this.id,this.name,this.salary)
      this.empService.updateEmp(this.emp.id,this.emp)
      this.fetch()
   }
   

}
 
