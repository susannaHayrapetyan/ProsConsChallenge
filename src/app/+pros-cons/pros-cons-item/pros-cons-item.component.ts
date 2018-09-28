import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pros-cons-item',
  templateUrl: './pros-cons-item.component.html',
  styleUrls: ['./pros-cons-item.component.css']
})
export class ProsConsItemComponent implements OnInit {
  isEditing: boolean;

  @Input('data') name: string;
  @Output() delete: EventEmitter<void>;
  @Output() edit: EventEmitter<string>;

  constructor() {
    this.isEditing = false;

    this.delete = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit() {
  }

  deleteItem(): void {

    this.delete.emit();
  }

  editItem(item): void {
    this.edit.emit(item.value);
    item.value = '';

    this.isEditing = false;
  }

}
