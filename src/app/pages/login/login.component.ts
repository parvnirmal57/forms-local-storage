import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginView: boolean =true;

  userRegisterObj: any={
    emailId:'',
    username:'',
    password:''
    
  }
  userLogin: any={
    username:'',
    password:''
    
  }
  router =  inject(Router);

  onRegister(){
    debugger;
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    }
    else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    }
    alert("User Registered Succesfully")
  }
  onLogin(){
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null){
      debugger;

      const users = JSON.parse(isLocalData); 

      const isUserFound =  users.find((m:any)=> m.userName == this.userLogin.userName && m.password == this.userLogin.password);
      if(isUserFound != undefined) {
        this.router.navigateByUrl('dashboard')
      } else {
        alert("User name or password is Wrong")
      }
    } else {
      alert("No User Found")
  }
}
  }
