import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../interfaces/launch';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http:HttpClient) { }

  getPastLaunches():Observable<Launch[]> {
    return this.http.get<Launch[]>('https://api.spacexdata.com/v4/launches/past')
  }

  getPlannedLaunches():Observable<Launch[]> {
    return this.http.get<Launch[]>('https://api.spacexdata.com/v4/launches/upcoming')
  }
  getOneLaunch(id:string):Observable<Launch> {
    return this.http.get<Launch>('https://api.spacexdata.com/v4/launches/'+id)
  }
}
