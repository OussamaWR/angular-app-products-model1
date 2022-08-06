import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {



  products$:Observable<AppDataState<Product[]>> | null=null; //variable de type Observable par convention on ajout $ à la fin
  //Observable : cad que il doit faire subscribe pour pouvoir récupérer les données
  readonly DataStateEnum=DataStateEnum;


  constructor(private productService:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }
  //__________ pour gerer le errors
  //.pipe: pour recoit les données et effictuer des operation map(recupere les données )=> return une resultat (Objet) :
  //dataState : la sutiation  des données qui va arriver ( en cours , si il y a erros va afficher
  //on va créer dataStatEnum {loadin,loaded,error}

  onGetAllProducts(){
    this.products$=this.productService.getAllProducts().pipe(
      map(data=>{
      console.log(data)
      return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }
  onGetSelectedProducts() {
    this.products$=this.productService.getSelectedProducts().pipe(
      map(data=>{
        console.log(data)
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }
  onGetAvailableProducts() {
    this.products$=this.productService.getAvailableProducts().pipe(
      map(data=>{
        console.log(data)
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }


  //_______________________1ére methode mais n'est pas le bon pratique__________________________

 /*
  products:Product[] | null=null; // soit un tableau de produit soit un null
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data;
    },error => {
      console.log(error)
    });
  }

  onGetSelectedProducts() {
    this.productService.getSelectedProducts().subscribe(data=>{
      this.products=data;
    },error => {
      console.log(error)
    })
  }

  onGetAvailableProducts() {
    this.productService.getAvailableProducts().subscribe(data=>{
      this.products=data;
    },error => {
      console.log(error)
    })
  }

  */
  // dans  la vue j'ai afficher le data à partir devariable produits


  onSearch(dataForm: any) {
    this.products$=this.productService.getSearchProducts(dataForm.keyword).pipe(
      map(data=>{
        console.log(data)
        return ({dataState:DataStateEnum.LOADED, data:data})
      }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }

  onSelect(p: Product) {
    this.productService.select(p).subscribe(data=>{
     p.selected=data.selected;
    })
  }

  onDelete(p: Product) {
    let v=confirm("Etes vous sure ?")
    if(v==true)
    this.productService.delete(p).subscribe(data=>{
      this.onGetAllProducts();
    });
  }

  onNewProduct(){
    this.router.navigateByUrl("newProduct");
  }

  onEdit(p: Product) {
    this.router.navigateByUrl("editProduct/"+p.id);
  }
}
