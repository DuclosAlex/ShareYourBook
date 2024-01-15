import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [HeaderComponent],
    templateUrl: './home.page.html',
    styleUrl: './home.page.css'
})
export class HomePage {
    title = "HomePage";
}