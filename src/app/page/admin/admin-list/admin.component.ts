import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/model/book.model';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

const TYPE_MODAL = {
  ADD: 1,
  UPDATE: 2,
  DELETE: 3,
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'action',
  ];
  dataSource = ELEMENT_DATA;
  listBook: Book[] = [];
  isOpenModal = false;
  TYPE_MODAL = TYPE_MODAL;
  typeModal: number = TYPE_MODAL.ADD;
  ngOnInit(): void {
    this.getAll();
  }
  constructor(
    private bookService: BookService,
    private appService: AppService,
    private router: Router
  ) {}
  getAll() {
    this.appService.setLoading(true);
    this.bookService.getAll().subscribe((res: any) => {
      this.appService.setLoading(false);
      this.listBook = res;
    });
  }

  showsLoading() {
    this.appService.setLoading(true);
    setTimeout(() => {
      this.appService.setLoading(false);
    }, 300);
  }

  handleShowModal(type: number) {
    this.typeModal = type;
    this.isOpenModal = true;
  }

  handleRedirectToDetail(id: any) {
    this.router.navigate([`/${id}/detail`]);
  }

  handleRedirectToAdd() {
    this.router.navigate([`/add`]);
  }

  handleCloseModal() {
    this.isOpenModal = false;
  }
}
