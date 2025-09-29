import { Component, signal } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import listaDesbravadores, { Desbravador, HistoricoMatricula } from '../../models/desbravador.model';
import { DatePipe } from '@angular/common';



var _listaDesbravador = signal<Desbravador[]>(listaDesbravadores);

@Component({
  selector: 'app-lista-membros',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, DatePipe],
  templateUrl: './lista-membros.html',
  styleUrl: './lista-membros.css'
})

export class ListaMembros {
  displayedColumns: string[] = ['id', 'nomeCompleto', 'dataNascimento', 'classeAtual', 'unidadeAtual' ];
  
  listaDesbravadores = _listaDesbravador().map(desbravador => {
    const historicoMatricula: HistoricoMatricula[] = desbravador.historicoMatriculas;
    const matriculaAtiva = historicoMatricula.find(matricula => matricula.ano === new Date().getFullYear());
    return {
      id: desbravador.id,
      nomeCompleto: desbravador.nomeCompleto,
      dataNascimento: desbravador.dataNascimento,
      classeAtual: matriculaAtiva ? matriculaAtiva.classe : 'N/A',
      unidadeAtual: matriculaAtiva ? matriculaAtiva.unidade : 'N/A',
      cargoAtual: matriculaAtiva ? matriculaAtiva.cargo : 'N/A'
    };
  });
  
  dataSource = new MatTableDataSource(this.listaDesbravadores);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

