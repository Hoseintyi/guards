import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedIn: boolean= false;

public isAuthenticated() 
{
return new Promise((resolve , reject)=>{
  setTimeout(()=>{
    resolve(this.LoggedIn);
  },1000);
});
}

public checkAuth()
{
return this.LoggedIn;
}



 public login()
  {
    this.LoggedIn= true;
  }

 public logOut()
  {
    this.LoggedIn= false;
  }
}
