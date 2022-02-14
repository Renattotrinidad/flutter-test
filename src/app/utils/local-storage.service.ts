import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItem(key: string): any{
    return JSON.parse(localStorage.getItem(key))
  }

  setItem(key: string, obj : any) : void{
    return localStorage.setItem(key, JSON.stringify(obj));
  }

  addProduct(product: any) : any[]{
    let items : any[] =  this.getItem('products');
    items.push(product);
    this.setItem('products', items)
    return items;
  }

  removeProduct(id: number) : any[]{
    let items : any[] =  this.getItem('products');
    return items.filter(item => item.id !== id);
    
  }

}
