import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    isClicked = false;

    showNav() {
        this.isClicked = !this.isClicked;
        console.log(this.isClicked)
    }
}