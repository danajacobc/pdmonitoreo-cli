import { Component, Input } from '@angular/core';
import { Plantas } from '../../interfaces/plantas';
import { Countries } from '../../interfaces/pais';
import { lastValueFrom } from 'rxjs';
import { PlantasService } from '../../services/plantas.services';

@Component({
  selector: 'dash-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

    @Input()
    public plantas: Plantas[] = [];

    @Input()
    public countries: Countries[] = [];

    plants! : Plantas[] ;

    constructor(private plantasService: PlantasService ) {
        this.getPlants();
    }

    async getPlants() {
      this.plants = await lastValueFrom(this.plantasService.getAllPlants());

    }

    openMenu = -1;

    toggleMenu(index : any) {
      console.log(index);
      console.log(this.openMenu);

      if(index > -1 && index !== this.openMenu){
        this.openMenu = index;
      }
      else if(this.openMenu >= 0){
        this.openMenu = -1;
      } else {
        this.openMenu = index;
      }
    }
}
