import { Component, OnInit, computed, signal } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { User } from '../../interfaces/user-request.interface';
import { first } from 'rxjs';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit{

  constructor( private userServices : UserServicesService){} 
  
  public userId = signal(1);
  
  public currentUser= signal<User| undefined>(undefined);
  
  public userWasFound = signal(true);

  public fullname = computed( () =>{
    if(!this.currentUser()) return'Usuario no encontrado';

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`
  })
  
  ngOnInit(): void {
    this.loaderUser(this.userId())
  }

  loaderUser(id : number){
    if(id<=0) return

    this.userId.set(id) 

    this.userServices.getByUse(id).
      subscribe({
        next:(user) =>{
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error:()=>{
          this.userWasFound.set(false)
          this.currentUser.set(undefined)
        }
      }
      )
  }



}
