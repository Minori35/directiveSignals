import { Component, signal } from '@angular/core';

interface MenuItem{
  title: string;
  router : string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItem = signal([
    {title:'Contador', router:'counter'},
    {title:'User-info', router:'user-info'},
    {title:'Mutaciones', router:'properties'},
  ]);
  // public menuItem : MenuItem[]=[
  //   {title:'Contador', router:'counter'},
  //   {title:'User-info', router:'user-info'},
  //   {title:'Mutaciones', router:'properties'},

  // ];


  
}
