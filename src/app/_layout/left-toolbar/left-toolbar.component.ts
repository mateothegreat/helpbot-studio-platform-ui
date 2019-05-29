import { Component }     from '@angular/core';
import { ThemesService } from '../themes/themes.service';

@Component({
    selector: 'app-left-toolbar',
    templateUrl: './left-toolbar.component.html',
    styleUrls: [ './left-toolbar.component.scss' ]
})
export class LeftToolbarComponent {

    public constructor(public themesService: ThemesService) {


    }

}
