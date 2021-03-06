import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { PoketablaService } from './poke-tabla.service';

@Component({
  selector: 'poke-tabla',
  templateUrl: './poke-tabla.component.html',
  styleUrls: ['./poke-tabla.component.scss'],
})
export class PokeTablaComponent implements OnInit {
  pokeList = [];
  limit: number = 0;
  constructor(
    private http: HttpClient,
    private pokeservice: PoketablaService
  ) {}

  ngOnInit() {
    this.getPokemones(3);
  }

  showPoke() {
    console.log(this.limit);
    if (this.limit == null) {
      this.getPokemones(3);
    }
    else if (this.limit <= 0) {
      this.getPokemones(0);
    }
    else if (this.limit >= 898) {
      this.getPokemones(898);
    }
    else {
      this.getPokemones(this.limit);
    }
  }

  getPokemones(stop: number) {
    let pokeData;
    this.pokeList.splice(0,this.pokeList.length);

    for (let i = 1; i <= stop; i++) {
      this.pokeservice.getPokemones(i).subscribe(
        (res) => {
          let urlImagen = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
          for (let j = i.toString().length; j < 3; ++j) {
            urlImagen += '0';
          }
          urlImagen += i + '.png';
          pokeData = {
            position: i,
            image: urlImagen,
            name: res.name.charAt(0).toUpperCase() + res.name.slice(1),
            type: res.types.map((index) => {
              return (index.type.name.charAt(0).toUpperCase() + index.type.name.slice(1));
            }),
            //type: res.types[0].type.name,
          };
          console.log(res);
          console.log(pokeData);
          this.pokeList.push(pokeData);
          this.pokeList.sort(function (a, b) {
            return a.position - b.position;
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}

function requestPokemon() {}
