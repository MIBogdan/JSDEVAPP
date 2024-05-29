import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home = "Titlu din Home Component";
  user = {
    nume: `Popescu`,
    prenume: `Dan`
  };

  myName:string='Petrescu Ion';

  cars = ['Tesla', 'Toyota', 'BMW', 'Honda', 'Ford', 'Hyundai', 'Nissan', 'Porche'];

  imageURL = "https://cdn.pixabay.com/photo/2021/04/07/03/24/walls-6157947_1280.jpg";
  showImg:boolean = false;

  trimiteDate() {
    if (this.showImg === false) {
      this.showImg=true;
    } else {
      this.showImg=false;
    }
  }

  
}
