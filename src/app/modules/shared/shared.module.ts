import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {usersReducer} from '../../state-manage/reducers/user.reducers';
import {USERS_STATE_NAME} from '../../state-manage/selectors/users.selectors';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {PostNoteContainerModule} from './components/posts/post-note-container.module';
import {SharedRoutingModule} from './shared-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    PostNoteContainerModule,
    StoreModule.forFeature(USERS_STATE_NAME, usersReducer)
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
