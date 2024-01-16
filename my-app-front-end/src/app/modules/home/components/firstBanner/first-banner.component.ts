import { Component } from "@angular/core";

@Component({
    selector : 'first-banner',
    standalone : true,
    templateUrl : './first-banner.component.html',
    styleUrl : './first-banner.component.css',
}) 

export class FirstBanner {
    imagePath= 'assets/image/book-echange.jpg';
}