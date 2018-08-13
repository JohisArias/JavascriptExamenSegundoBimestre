import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickEnBuscar: EventEmitter<object> = new EventEmitter();
  autores;
  libros;
  searchText:string;
  arrayNombresAutores=[];
  arrayNombresLibros=[];

  j:string;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

    const observableAutor$ = this._httpClient
      .get('http://localhost:1337/autor');

    observableAutor$
      .subscribe(
        results=>{
          console.log(results);
          this.autores=results;
          this.llenarAutores();

        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );

    const observableLibro$ = this._httpClient
      .get('http://localhost:1337/libro');

    observableLibro$
      .subscribe(
        results=>{
          console.log(results);
          this.libros=results;
          this.llenarLibros()

        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );

  }

  llenarAutores(){
    for (var i = 0; i < this.autores.length; i++) {
      this.arrayNombresAutores.push(this.autores[i].nombre);
    }
  }

  llenarLibros(){
    for (var i = 0; i < this.libros.length; i++) {
      this.arrayNombresLibros.push(this.libros[i].nombreLibro);
    }
  }







}
