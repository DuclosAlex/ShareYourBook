import { Component, Input } from "@angular/core";

@Component({
    selector: 'presentation-module',
    standalone: true,
    templateUrl: './presentation-module.component.html',
    styleUrl : './presentation-module.component.css'
})

export class PresentationModule {
    @Input() data: any;
}