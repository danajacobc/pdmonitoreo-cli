import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { countries } from '../../../../assets/constant';
import { PlantasService } from '../../services/plantas.services';
import { lastValueFrom } from 'rxjs';
import { PlantDTO } from '../../interfaces/plantas';

@Component({
  selector: 'dash-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Output() closeModal = new EventEmitter();
  createForm: any;
  countries = countries;

  constructor(private formBuilder: FormBuilder, private plantasService: PlantasService){
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
    })
  }

  emitCloseModal(){
    this.closeModal.emit(false);
  }

  async createPlant(){

    const country = this.countries.find(c => c.name === this.createForm.get('country').value);

    const createDTO : PlantDTO = {
      name: this.createForm.get('name').value,
      pais: country!.id,
      lectures:     0,
      red_alert:    0,
      medium_alert: 0,
      enabled:      false,
    }

    const result = await lastValueFrom(this.plantasService.createPlant(createDTO));
    if(result){
      this.emitCloseModal();
    }
  }


}
