import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData : any = { Username: '', Password: '' } ;
  signupData : any = { Username: '', Password: '', confirmPassword: '' };
  errorMessage = '';
  errorMessagesignup='';
  constructor(private http: HttpClient , private router: Router) {}
  ngOnInit(): void {
  }

  login() {
    if (!this.loginData.Username || !this.loginData.Password) {
      this.errorMessage = 'Please enter both Username and Password.';
      return;
    }

    this.http.post<any>('http://localhost:5106/api/Auth/login', this.loginData)
    .subscribe(response => {
        // Handling  successful login response
        console.log('Login successful', response);
        // Redirect to dashboard
        this.router.navigate(['/home', this.loginData.Username]);
        
      }
    );

      }
     signup() {
        if (!this.signupData.Username || !this.signupData.Password || !this.signupData.confirmPassword) {
          this.errorMessagesignup = 'Please fill all fields.';
          return;
        }
    
        if (this.signupData.Password !== this.signupData.confirmPassword) {
          this.errorMessagesignup = 'Passwords do not match.';
          return;
        }
    
        this.http.post('http://localhost:5106/api/Auth/signup', this.signupData)
    .subscribe( response => {
              // Handle successful signup response
              console.log('Signup successful', response); 
              // Redirect to login page or perform any other action upon successful signup
              this.router.navigate(['/home', this.signupData.Username]);
            })
      }

   



    }