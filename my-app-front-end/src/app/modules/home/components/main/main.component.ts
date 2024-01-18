import { Component } from "@angular/core";
import { FirstBanner } from "../firstBanner/first-banner.component";
import { Presentation } from "../presentation/presentation.component";

@Component({
    selector: 'main-home-component',
    standalone: true,
    imports : [FirstBanner, Presentation],
    templateUrl : './main.component.html'
})

export class MainHomeComponent {}