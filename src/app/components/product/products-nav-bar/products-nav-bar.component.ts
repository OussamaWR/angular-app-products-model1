import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.service';
import {ActionEvent, ProductActionsType} from "../../../state/product.state";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
 // @Output() productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();

  //c-a-d ce component a une sortie cette sortie est : eventEmitter
  // a chaque fois j'appelle eventEmittre.emit il va mettre une evenement dans sa sortie et l'autre component on définit
  //dans les attributes de balise <product-nav-bar  productEventEmitter="fct($event)"> pour si on a un event il va traiter
// ActionEvent : est une interface dans lequel nous avons mettre les typede action(enum) et les paramettre (pour le cas d'un formule)
//
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    //this.productEventEmitter.emit("ALL_PRODUCTS") //pas le bon pratique

    //this.productEventEmitter.emit({type:ProductActionsType.GET_ALL})
    this.eventDriverService.publishEvent({type:ProductActionsType.GET_ALL})
  }

  onGetSelectedProducts() {
    //this.productEventEmitter.emit({type:ProductActionsType.GET_SELECTED_PRODUCTS})
    this.eventDriverService.publishEvent({type:ProductActionsType.GET_SELECTED_PRODUCTS})
  }

  onGetAvailableProducts() {
  //  this.productEventEmitter.emit({type:ProductActionsType.GET_AVAILABLE_PRODUCTS})
    this.eventDriverService.publishEvent({type:ProductActionsType.GET_AVAILABLE_PRODUCTS})
  }

  onNewProduct() {
    //this.productEventEmitter.emit({type:ProductActionsType.NEW_PRODUCT})
    this.eventDriverService.publishEvent({type:ProductActionsType.NEW_PRODUCT})
  }

  onSearch(dataForm: any) {
   // this.productEventEmitter.emit({type:ProductActionsType.SEARCH_PRODUCTS,payload:dataForm})
    this.eventDriverService.publishEvent({type:ProductActionsType.SEARCH_PRODUCTS,payload:dataForm})
  }
}
