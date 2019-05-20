import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as rx from 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pagination';
  config: any; 
  collection = [];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.config = {
    			currentPage: 1,
    			itemsPerPage: 2
    };

    this.route.queryParamMap
            .map(params => params.get('page'))
            .subscribe(page => this.config.currentPage = page);

     

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }  
  }
  pageChange(newPage: number) {
		this.router.navigate([''], { queryParams: { page: newPage } });
	}
}
