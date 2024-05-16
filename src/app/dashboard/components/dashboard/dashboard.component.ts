import { Component, Input } from '@angular/core';
import { Plantas } from '../../interfaces/plantas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  @Input()
  public plantas: Plantas[] = [];

}
