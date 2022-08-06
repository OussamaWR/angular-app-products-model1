import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
@Injectable({providedIn:"root"}) //c à d que le service est disponible dans tous l'application dans la racine de l'application
export class ProductsService {
  constructor(private http:HttpClient) { // deckaration de variable + inistalisation injection de dependance
  }

  getAllProducts():Observable<Product[]>{
    // return this.http.get("http://localhost:3000/products")  : n'est pas bien de spècifié l addresse dans  votre code ,
    // ms on a environments dans notre proje dans lequel on peut declarer les constante


    let host=environment.host;
    return this.http.get<Product[]>(host+"/products");

  }

  getSelectedProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");

  }

  getAvailableProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");

  }
  getSearchProducts(keyword:string):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);

  }

  /*_______________update______________________*/

  select(product:Product):Observable<Product>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.put<Product>(host+"/products/"+product.id,product);

  }


  delete(product:Product):Observable<void>{
    let host=environment.host;

    return this.http.delete<void>(host+"/products/"+product.id);

  }

  save(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.post<Product>(host+"/products",product);

  }

  getProducts(id:number):Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/products/"+id);

  }

  updateProducts(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/products/"+product.id,product);

  }
}
