import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private _usuario=[];

  constructor() {
    this._usuario = [
      {
        id:10,
        nombre: 'Johanna',
        apellidoUsuario: 'Arias',
        correoElectronico: 'johismn9-3@hotmail.com',
        imagen: 'https://scontent.fuio10-1.fna.fbcdn.net/v/t31.0-8/28954598_2567839756588137_7903066618667784633_o.jpg?_nc_cat=0&oh=898d24adcae2168cb6e45ebbb481b08c&oe=5C0D71B0',
        direccion: 'Amagasi de El Inca',
        telefono: '0991310296'
      }];
  }

  public getUsuario(){
    return this._usuario;
  }
}
