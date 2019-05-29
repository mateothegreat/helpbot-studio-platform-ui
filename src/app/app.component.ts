import { Component }     from '@angular/core';
import { ThemesService } from './_layout/themes/themes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public constructor(public themesService: ThemesService) {
        

    }

}
