/**
 * @author rveizaga
 */
import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {
    path: '**',
    redirectTo: '/demo/notes',
    pathMatch: 'full',
    canActivateChild: []
  }
];
