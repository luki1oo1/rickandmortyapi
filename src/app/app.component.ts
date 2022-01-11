import {Component} from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-and-morty';
  form: any;
  restaurants = [];
  error:any = null;
  img:any;
  status: any;
  species: any;
  gender: any;
  name:any;
  origin: any;
  location: any;
  id: any;
  numberI : string = '';



  onKey() {
    console.log(this.numberI)
    const resp = 'https://rickandmortyapi.com/api/character';
    const number = this.numberI;
    axios.get(`${resp}/${number}`).then(response => {
      this.img = response.data.image
      this.status = response.data.status
      this.species = response.data.species
      this.gender = response.data.gender
      this.name = response.data.name
      this.origin = response.data.origin.name
      this.location = response.data.location.name
      this.id = response.data.id;
    });
  }

}
