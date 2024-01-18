import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainHomeComponent } from './components/main/main.component';
import { Footer } from '../footer/footer.component';

@Component({
    selector: 'home-page',
    standalone: true,
    imports: [HeaderComponent, MainHomeComponent, Footer],
    templateUrl: './home.page.html',
    styleUrl: './home.page.css'
})
export class HomePage {
    title = "HomePage";
}