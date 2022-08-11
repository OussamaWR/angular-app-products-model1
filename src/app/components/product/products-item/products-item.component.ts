import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.service';
import {Product} from "../../../model/product.model";
import {ActionEvent, ProductActionsType} from "../../../state/product.state";

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
   @Input() product!:Product;
  // @Output() eventEmitter:EventEmitter<ActionEvent>=new EventEmitter();

  constructor( private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onDelete(product: Product) {
    //this.eventEmitter.emit({type:ProductActionsType.DELETE_PRODUCT,payload:product})
    this.eventDriverService.publishEvent({type:ProductActionsType.DELETE_PRODUCT,payload:product})
  }

  onEdit(product: Product) {
    //this.eventEmitter.emit({type:ProductActionsType.EDIT_PRODUCT,payload:product})
    this.eventDriverService.publishEvent({type:ProductActionsType.EDIT_PRODUCT,payload:product})
  }

  onSelect(product: Product) {
  //this.eventEmitter.emit({type:ProductActionsType.SELECT_PRODUCT,payload:product})
  this.eventDriverService.publishEvent({type:ProductActionsType.SELECT_PRODUCT,payload:product})
  }
}
