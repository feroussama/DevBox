import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mmbre-eqpe-projet',
  templateUrl: './mmbre-eqpe-projet.component.html',
  styleUrls: ['./mmbre-eqpe-projet.component.scss']
})
export class MmbreEqpeProjetComponent implements OnInit {
  rows: any;
  columns: any;
  constructor() { }

  ngOnInit() {
    this.rows = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    this.columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
    ];
  }

}
