import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-themes-list',
  standalone: true,
  imports: [],
  templateUrl: './themes-list.component.html',
  styleUrl: './themes-list.component.css'
})
export class ThemesListComponent {

  constructor(private apiService: ApiService){

  }

  ngOnInit(){
    this.apiService.getThemes().subscribe(t =>{
      console.log(t);
    })
  }

}
