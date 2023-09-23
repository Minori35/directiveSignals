import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

constructor(private httt: HttpClient){

}

private urlBase ='https://reqres.in/api/users';

getByUse(id: number): Observable<User>{
  return this.httt.get<SingleUserResponse>(`${this.urlBase}/${id}`)
  .pipe(
    map(response => response.data),
    tap( console.log
    )
  );
}

}
