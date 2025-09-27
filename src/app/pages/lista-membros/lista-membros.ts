import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import listaDesbravadores, { Desbravador } from '../../models/desbravador.model';
import { DatePipe } from '@angular/common';

const ELEMENT_DATA: Desbravador[] = listaDesbravadores


@Component({
  selector: 'app-lista-membros',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, DatePipe],
  templateUrl: './lista-membros.html',
  styleUrl: './lista-membros.css'
})

export class ListaMembros {
  displayedColumns: string[] = ['id', 'nomeCompleto', 'dataNascimento'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  applyFilter(event: Event) {
    console.log(this.dataSource.data);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

