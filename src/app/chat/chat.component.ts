import { Component }     from '@angular/core';
import { ThemesService } from '../_layout/themes/themes.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: [ './chat.component.scss' ]
})
export class ChatComponent {

    public constructor(public themesService: ThemesService) {


    }

}
