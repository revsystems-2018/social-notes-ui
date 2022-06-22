import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {notesReducer} from '../../state-manage/reducers/note.reducers';
import {NOTES_STATE_NAME} from '../../state-manage/selectors/notes.selectors';
import {CommentsContainerModule} from './components/comments/comments-container.module';
import {SnuFilterNoteComponent} from './components/filter-note/snu-filter-note.component';
import {SnuListNoteComponent} from './components/list-note/snu-list-note.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {SnuNoteViewComponent} from './components/note/note-view/snu-note-view.component';
import {SnuNoteContainerComponent} from './components/note/snu-note-container.component';
import {SnuSearchNoteComponent} from './components/search-note/snu-search-note.component';
import {ShowcaseRoutingModule} from './showcase-routing.module';


@NgModule({
  declarations: [
    SnuSearchNoteComponent,
    SnuFilterNoteComponent,
    SnuNoteContainerComponent,
    SnuNoteViewComponent,
    SnuListNoteComponent,
    MainPageComponent
  ],
  exports: [
    SnuSearchNoteComponent,
    SnuFilterNoteComponent,
    SnuNoteContainerComponent,
    SnuNoteViewComponent,
    SnuListNoteComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShowcaseRoutingModule,
    CommentsContainerModule,
    StoreModule.forFeature(NOTES_STATE_NAME, notesReducer)
  ]
})
export class ShowcaseModule {
}
