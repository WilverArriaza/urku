import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info:any = {};

  constructor( public http:HttpClient ) { 

    this.http.get("assets/data/info.page.json")
      .subscribe( data => {
        console.log(data);
        this.info = data;
      } )

  }
}
