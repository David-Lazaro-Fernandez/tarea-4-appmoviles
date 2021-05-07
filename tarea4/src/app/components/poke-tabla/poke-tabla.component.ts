import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'poke-tabla',
  templateUrl: './poke-tabla.component.html',
  styleUrls: ['./poke-tabla.component.scss'],
})
export class PokeTablaComponent implements OnInit {

  pokeList = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/`)
    .subscribe(res => {
        console.log(res);
        this.pokeList = res.results;
        console.log(this.pokeList)
    })
  }

}
