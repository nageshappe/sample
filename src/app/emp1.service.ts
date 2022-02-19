import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Emp } from './emp';


@Injectable({
  providedIn: 'root'
})
export class Emp1Service {

  emps:Emp[]=[]
   emp:any;
  constructor(private http:HttpClient) { }

  getEmps(){
      return this.http.get<Emp[]>("http://localhost:3000/emp")
     
  }

  addEmp(emp:Emp)
  {
    
      this.http.post("http://localhost:3000/emp",emp).subscribe(data=>{})
  }
  deleteEmp(id:string)
  {
    this.http.delete("http://localhost:3000/emp/"+id).subscribe
    (data=>{})

  }

  updateEmp(id:string,emp:Emp)
  {
    this.http.put("http://localhost:3000/emp/"+id,emp).subscribe(
      data=>{})
    
  }





//    deleteStudent(id:string)
//    {
//       this.http.delete("http://localhost:3000/students/"+id,{'responseType':'text'}).subscribe(data=>{
//         console.log("Deleted")
//       })
//    }

//    getStudent(id:string)
//     {   
//            return  this.http.get<Student>("http://localhost:3000/students/"+id)
          
   
// }

//  updateStudent(student:Student){

//   // const body= JSON.stringify(student)
//   this.http.put("http://localhost:3000/students/"+student.id,student ).subscribe(data=>{})
//  }
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Emp } from './emp';

// @Injectable({
//   providedIn: 'root'
// })
// export class Emp1Service {
//   emp:Emp[]=[];
//   constructor(private http:HttpClient) { }

//   getEmps(){
    

//     this.http.get<Emp[]>("http://localhost:3000/emp").subscribe(data=>
//     {
//          this.emp = data
//     })
//    return this.emp    
    
//    }


//   public addEmp(emp1:Emp){
//    console.log(emp1) 
//    return this.http.post("http://localhost:3000/emp",emp1).subscribe(data=>{console.log(data)})
// }
  
// }
