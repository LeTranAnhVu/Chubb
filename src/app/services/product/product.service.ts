import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	getData(): Observable<any> {
		return this.http.get('../assets/db/home/homeproduct.json');
	}
	constructor(private http: HttpClient) { }
}
