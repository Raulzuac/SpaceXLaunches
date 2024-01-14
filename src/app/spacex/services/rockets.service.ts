import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '../interfaces/rocket';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http:HttpClient) { }

  getRockets():Observable<Rocket[]>{
    return this.http.get<Rocket[]>('https://api.spacexdata.com/v4/rockets');

  }
}
