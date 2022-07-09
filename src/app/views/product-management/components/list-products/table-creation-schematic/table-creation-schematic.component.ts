import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableCreationSchematicDataSource, TableCreationSchematicItem } from './table-creation-schematic-datasource';

@Component({
  selector: 'c3r-table-creation-schematic',
  templateUrl: './table-creation-schematic.component.html',
  styleUrls: ['./table-creation-schematic.component.scss']
})
export class TableCreationSchematicComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableCreationSchematicItem>;
  dataSource: TableCreationSchematicDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new TableCreationSchematicDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
