import { Component } from "@angular/core";
import { PresentationModule } from "../presentation-module/presentation-module.component";

@Component({
    selector: 'presentation',
    standalone : true,
    imports : [PresentationModule],
    templateUrl: './presentation.component.html',
    styleUrl: './presentation.component.css',

})

export class Presentation {

    presentationArray = [
        { order: '01', title : 'Je crée mon compte', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus illo doloribus reiciendis dolorem velit!', textLink : 'Je crée mon compte' , textColor: true},
        { order: '02', title : "Je remplis ma bibliothéque et mon profil de lecteur", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus illo doloribus reiciendis dolorem velit!', textLink : 'Ajoutez vos livres' , textColor: false},
        { order: '03', title : "Je prends contact pour convenir d'un échange", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus illo doloribus reiciendis dolorem velit!', textLink : 'Je cherche un livre à emprunter' , textColor: true},
        { order: '04', title : "Je gère mes emprunts et mes prêts", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus illo doloribus reiciendis dolorem velit!', textLink : 'Gestion des prêts et emprunts' , textColor: false}
    ]
}