import { Component, OnInit } from '@angular/core';

import { ProsConsService } from '../data/services';
import { ProsCons } from '../data/models';

@Component({
  selector: 'app-pros-cons',
  templateUrl: './pros-cons.component.html',
  styleUrls: ['./pros-cons.component.css']
})
export class ProsConsComponent implements OnInit {
  prosCons: ProsCons;

  constructor(private prosConsService: ProsConsService) { }

  ngOnInit() {

    this.prosConsService.get().subscribe((data: ProsCons) => {

      this.prosCons = data;

      }, (error) => {

      console.error('Something went wrong! ', error);

    });
  }

  addNewPros(pros) {
    const newData: ProsCons = {
      pros: [
        ...this.prosCons.pros,
        pros.value,
      ],
      cons: this.prosCons.cons,
    };

    pros.value = '';

    this.updateProsCons(newData);

  }

  addNewCons(cons) {
    const newData: ProsCons = {
      pros: this.prosCons.pros,
      cons: [
        ...this.prosCons.cons,
        cons.value,
      ],
    };

    cons.value = '';

    this.updateProsCons(newData);

  }

  deleteCons(index) {
    const newData: ProsCons = {
      pros: this.prosCons.pros,
      cons: this.prosCons.cons.filter((cons, i) => i !== index),
    };

    this.updateProsCons(newData);

  }

  deletePros(index) {
    const newData: ProsCons = {
      pros: this.prosCons.pros.filter((pros, i) => i !== index),
      cons: this.prosCons.cons,
    };

    this.updateProsCons(newData);

  }

  editPros(newName, index) {
    const newData: ProsCons = {
      pros: this.prosCons.pros.map((pros, i) => i === index ? newName : pros),
      cons: this.prosCons.cons,
    };

    this.updateProsCons(newData);

  }

  editCons(newName, index) {
    const newData: ProsCons = {
      pros: this.prosCons.pros,
      cons: this.prosCons.cons.map((cons, i) => i === index ? newName : cons),
    };

    this.updateProsCons(newData);

  }

  updateProsCons(newData) {

    this.prosConsService.update(newData).subscribe((data: ProsCons) => {

      this.prosCons = data;
    }, (error) => {

      console.error('Something went wrong! ', error);

    });

  }

}
