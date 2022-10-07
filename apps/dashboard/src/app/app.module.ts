import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    NxWelcomeComponent,
    AvatarModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'employee',
          loadChildren: () =>
            import('employee/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavbarComponent],
})
export class AppModule {}
