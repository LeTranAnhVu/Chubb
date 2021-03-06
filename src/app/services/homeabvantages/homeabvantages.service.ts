import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HomeabvantagesService {
	getData(): Observable<any> {
		return this.http.get('./assets/db/home/homeabvantages.json');
	}
	constructor(private http: HttpClient) { }
}
