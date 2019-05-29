import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { RouterModule }          from '@angular/router';
import { LeftToolbarComponent }  from './_layout/left-toolbar/left-toolbar.component';
import { RightContentComponent } from './_layout/right-content/right-content.component';

import { AppComponent }   from './app.component';
import { ChatComponent }  from './chat/chat.component';
import { HomeComponent }  from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { HeaderComponent } from './_layout/header/header.component';
import { ChatHistoryItemComponent } from './chat/chat-history-item/chat-history-item.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({

    declarations: [

        AppComponent,
        LeftToolbarComponent,
        RightContentComponent,
        HomeComponent,
        InboxComponent,
        ChatComponent,
        HeaderComponent,
        ChatHistoryItemComponent,
        QuestionsComponent

    ],

    imports: [

        BrowserModule,
        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'inbox',
                component: InboxComponent

            }, {

                path: 'chat',
                component: ChatComponent

            }, {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }

        ])

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
