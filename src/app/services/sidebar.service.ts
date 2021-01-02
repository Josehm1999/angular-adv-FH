import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]= [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/dashboard'},
        { title: 'ProgressBar', url: '/dashboard/progress'},
        { title: 'Gráficas', url: '/dashboard/grafica1'},
        { title: 'Promesas', url: '/dashboard/promesas'},
        { title: 'Rxjs', url: '/dashboard/rxjs'},
      ]
    }
  ];
  constructor() { }
}
