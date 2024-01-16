import { Component } from "@angular/core";
import { FirstBanner } from "../firstBanner/first-banner.component";

@Component({
    selector: 'main-home-component',
    imports : [FirstBanner],
    standalone: true,
    templateUrl : './main.component.html'
})

export class MainHomeComponent {}