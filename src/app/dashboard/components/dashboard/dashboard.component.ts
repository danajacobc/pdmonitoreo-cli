import { Component, Input } from '@angular/core';
import { Plantas } from '../../interfaces/plantas';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @Input()
  public plantas: Plantas[] = [];

  constructor( private formBuilder: FormBuilder ) {
    setTimeout(() => {
      console.log('Expiro la sesión.');
      localStorage.removeItem('fakeToken')
    }, 600000)
  }

  openModal = false;

  openCreateModal(boolean : boolean){
    this.openModal = boolean;
  }

}
