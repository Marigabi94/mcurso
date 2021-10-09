import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hcompras',
  templateUrl: './hcompras.component.html',
  styleUrls: ['./hcompras.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HcomprasComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  columnsToDisplay = ['Curso', 'Fecha'];
  expandedElement: PeriodicElement | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  Curso: string;
  Precio_total: number;
  Fecha: number;
  Tipo_de_pago: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Curso: 'Hydrogen',
    Precio_total: 1,
    Fecha: 1.0079,
    Tipo_de_pago: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic Fecha of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    Precio_total: 2,
    Curso: 'Helium',
    Fecha: 4.0026,
    Tipo_de_pago: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    Precio_total: 3,
    Curso: 'Lithium',
    Fecha: 6.941,
    Tipo_de_pago: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    Precio_total: 4,
    Curso: 'Beryllium',
    Fecha: 9.0122,
    Tipo_de_pago: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    Precio_total: 5,
    Curso: 'Boron',
    Fecha: 10.811,
    Tipo_de_pago: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    Precio_total: 6,
    Curso: 'Carbon',
    Fecha: 12.0107,
    Tipo_de_pago: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    Precio_total: 7,
    Curso: 'Nitrogen',
    Fecha: 14.0067,
    Tipo_de_pago: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    Precio_total: 8,
    Curso: 'Oxygen',
    Fecha: 15.9994,
    Tipo_de_pago: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    Precio_total: 9,
    Curso: 'Fluorine',
    Fecha: 18.9984,
    Tipo_de_pago: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    Precio_total: 10,
    Curso: 'Neon',
    Fecha: 20.1797,
    Tipo_de_pago: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];
