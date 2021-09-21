import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$('.one-time').slick({
	  dots: false,
	  infinite: true,
	  speed: 200,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  fade: true,
	  autoplay: true,
	  autoplaySpeed: 2000
	});
  }

}
