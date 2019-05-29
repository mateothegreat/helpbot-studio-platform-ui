import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemesService {

    public background: string = '#20222A';
    public leftToolbarBackground: string = '#151920';
    public leftToolbarIconColor: string = '#54575D';
    public leftToolbarAddIconColor: string = '#31C598';
    public rightContentBackground: string = '#2A2E33';
    public inputBackground: string = '#2C2D33';
    public messageBackground: string = '#323340';

}
