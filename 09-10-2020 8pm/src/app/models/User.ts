
// import {Role} from "../enum/Role";

// export class User {

//     email: string;

//     password: string;

//     confirmPassword : string

//     name: string;

//     phone: string;

//     address: string;

//     active: boolean;

//     role: string;

//     constructor(){
//         this.active = true;
//         this.role = Role.Customer;
//     }
// }

import {required,compare,alpha,minLength } from "@rxweb/reactive-form-validators"

export class User{

  id: number;
  
  name:string;

 
  email:string;

 
  password:string;

  
  confirmPassword?:string;
  
  
  number:string;

}
