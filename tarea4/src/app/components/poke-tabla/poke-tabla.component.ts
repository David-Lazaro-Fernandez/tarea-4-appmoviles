import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import {PoketablaService} from './poke-tabla.service';
@Component({
  selector: 'poke-tabla',
  templateUrl: './poke-tabla.component.html',
  styleUrls: ['./poke-tabla.component.scss'],
})
export class PokeTablaComponent implements OnInit {
  pokeList = [];
  constructor(
    private http: HttpClient,
    private pokeservice: PoketablaService
  ) { }

  ngOnInit() {
   this.getPokemones()   
   console.log(this.pokeList)
  }

  getPokemones(){
    let pokeData;

    for(let i=1;i<50;i++){
      this.pokeservice.getPokemones(i).subscribe(
        res=>{
          console.log(res)
          pokeData ={
            position: i, 
            image: res.sprites.front_default, 
            name:res.name,
            type: res.types[0].type.name,
          };
          this.pokeList.push(pokeData);
          this.pokeList.sort(function(a,b){
            return a.position - b.position;
          })
        },
        err=>{
          console.log(err)
        }
      );
    }
  }
}

function requestPokemon(){

}
