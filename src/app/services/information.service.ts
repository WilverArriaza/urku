import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info:any = {};
  load:boolean = false;
  load_about:boolean= false;
  team:any = [];

  constructor( public http:HttpClient ) { 
    this.load_info();
    this.load_about_us();
  }

  public load_info(){
    this.http.get("assets/data/info.page.json")
      .subscribe( data => {
        // console.log(data);
        this.load = true;
        this.info = data;
      } )

  }

  public load_about_us(){

    this.http.get("https://testportfolio-400e2-default-rtdb.firebaseio.com/team.json")
      .subscribe( data => {
        console.log(data);
        this.load_about = true;
        this.team = data;
      } )
  }
}
