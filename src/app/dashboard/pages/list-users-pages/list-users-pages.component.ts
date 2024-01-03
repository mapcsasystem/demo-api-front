import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormUser } from '../../interfaces/form.interface';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const ELEMENT_DATA: FormUser[] = [
  { id: 1, name: 'Hydrogen', age: 1.0079, email: 'H' },
  { id: 2, name: 'Helium', age: 4.0026, email: 'He' },
  { id: 3, name: 'Lithium', age: 6.941, email: 'Li' },
  { id: 4, name: 'Beryllium', age: 9.0122, email: 'Be' },
  { id: 5, name: 'Boron', age: 10.811, email: 'B' },
  { id: 6, name: 'Carbon', age: 12.0107, email: 'C' },
  { id: 7, name: 'Nitrogen', age: 14.0067, email: 'N' },
  { id: 8, name: 'Oxygen', age: 15.9994, email: 'O' },
  { id: 9, name: 'Fluorine', age: 18.9984, email: 'F' },
  { id: 10, name: 'Neon', age: 20.1797, email: 'Ne' },
];

@Component({
  selector: 'app-list-users-pages',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './list-users-pages.component.html',
  styleUrl: './list-users-pages.component.css',
})
export class ListUsersPagesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns = ['id', 'name', 'email', 'age', 'actions'];
  dataSource = new MatTableDataSource<FormUser>();
  user: FormUser[] = [];
  private userService = inject(UserService);
  private _snackBar = inject(MatSnackBar);

  ngAfterViewInit() {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this._snackBar.open('Usuarios cargados correctamente', 'Aceptar', {
          duration: 3000,
        });
      },
      error: (err) => {
        this._snackBar.open('Error al traer usuario', 'Aceptar', {
          duration: 3000,
        });
        console.log(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
