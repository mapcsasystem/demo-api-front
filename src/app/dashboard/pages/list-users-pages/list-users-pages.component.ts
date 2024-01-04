import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormUser } from '../../interfaces/form.interface';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

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

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
