import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsType} from "../../../state/product.state";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  readonly DataStateEnum=DataStateEnum;
  @Input() productsInput$:Observable<AppDataState<Product[]>> | null=null; // l7wayj li kay dkhalo l component bach t affichihom
  @Output() productsEventEmitter:EventEmitter<ActionEvent>=new EventEmitter() // l7wayj li kay 5rji mn component  mn ba3d makatraitihom
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: Product) {
this.productsEventEmitter.emit({type:ProductActionsType.SELECT_PRODUCT,payload:p});
  }

  onDelete(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsType.DELETE_PRODUCT,payload:p});
  }

  onEdit(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsType.EDIT_PRODUCT,payload:p})
  }

  onActionEvent($event: ActionEvent) {
    this.productsEventEmitter.emit($event)
  }
}
