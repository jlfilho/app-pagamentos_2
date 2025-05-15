import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-lancamentos',
  imports: [FormsModule,
    CommonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule],
  templateUrl: './lancamentos.component.html',
  styleUrl: './lancamentos.component.scss'
})
export class LancamentosComponent implements AfterViewInit {
  descricao = '';
  vencimentoInicio = '';
  vencimentoFim = '';
  colunas: string[] = ['pessoa', 'descricao', 'vencimento', 'pagamento', 'valor', 'acoes'];
  lancamentos = [
    { tipo: 'RECEITA', pessoa: 'Henrique Medeiros', descricao: 'Bahamas', vencimento: '10/06/2017', pagamento: null, valor: 500.00 },
    { tipo: 'DESPESA', pessoa: 'Josué Mariano', descricao: 'Café', vencimento: '10/06/2017', pagamento: null, valor: 8.32 },
    { tipo: 'RECEITA', pessoa: 'Maria Rita', descricao: 'Bahamas', vencimento: '10/02/2017', pagamento: '10/02/2017', valor: 100.32 },
    { tipo: 'RECEITA', pessoa: 'Pedro Santos', descricao: 'Top Club', vencimento: '10/06/2017', pagamento: null, valor: 120.00 },
    { tipo: 'RECEITA', pessoa: 'Ricardo Pereira', descricao: 'CEMIG', vencimento: '10/02/2017', pagamento: '10/02/2017', valor: 110.44 }
  ];

  dataSource = new MatTableDataSource(this.lancamentos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
