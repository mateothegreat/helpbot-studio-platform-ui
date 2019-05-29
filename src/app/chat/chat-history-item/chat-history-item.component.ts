import { Component }     from '@angular/core';
import { ThemesService } from '../../_layout/themes/themes.service';

@Component({
    selector: 'app-chat-history-item',
    templateUrl: './chat-history-item.component.html',
    styleUrls: [ './chat-history-item.component.scss' ]
})
export class ChatHistoryItemComponent {

    public constructor(public themesService: ThemesService) {


    }

}
