import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private apitool:HttpClient) { }

    getApi(url:string){
    return this.apitool.get(url);
    }

    postApi(url:string,postData:any){
    return this.apitool.post(url,postData);
    }

    putApi(url:string,putData:any){
      return this.apitool.put(url,putData);
    }

    delApi(url:string){
      return this.apitool.delete(url);
    }

}
