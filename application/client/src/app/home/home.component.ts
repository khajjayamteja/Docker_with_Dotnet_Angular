import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./assets/css/style.css', './assets/vendor/aos/aos.css', './assets/vendor/bootstrap-icons/bootstrap-icons.css', './assets/vendor/bootstrap/css/bootstrap.min.css', './assets/vendor/boxicons/css/boxicons.min.css', './assets/vendor/glightbox/css/glightbox.min.css', './assets/vendor/swiper/swiper-bundle.min.css']
})
export class HomeComponent implements OnInit {
  username: string ='' ;

  constructor(private route: ActivatedRoute , private router: Router) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
  }

  signOut() {
    localStorage.removeItem('currentUser'); 

    // Redirect to login page
    this.router.navigate(['/login']);
  }

}