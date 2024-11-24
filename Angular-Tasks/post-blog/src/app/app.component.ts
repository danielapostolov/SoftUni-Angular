import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'post-blog';


  // ngOnInit() {
  //   this.http.get('https://blog-angular-workshop-default-rtdb.firebaseio.com/product.json').subscribe(x => {
  //     console.log(x);
  //   })
  // }
}
