import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BannerhomeService {
	getData(): Observable<any> {
		return this.http.get('./assets/db/home/homebanner.json');
	}
	constructor(private http: HttpClient) { }
}
