import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

	title = 'movie-reviewer';
	constructor() {
		// $('.button-collapse').sideNav();
	 }

	ngOnInit() {
		// $('.button-collapse').sideNav();
	}

	ngAfterViewInit() {
		document.addEventListener('DOMContentLoaded', function () {
			// $('.button-collapse').sideNav(); //.css('background-color', 'red'); //.sideNav();
		});
	}

	toggleNav($event) {
		// $event.preventDefault();
		// console.log($event);
		// $('.button-collapse').sideNav('show');
	}

}
