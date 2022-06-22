import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {SnuComments} from '../api/snu-comments';
import {SnuNotes} from '../api/snu-notes';

@Injectable({
  providedIn: 'root'
})
export class ShowcaseCommentsService {

  private dataComments: SnuComments[];

  constructor() {
    this.dataComments = [
      {
        commentId: 1,
        title: 'A popular comment #1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        noteId: 1
      },
      {
        commentId: 2,
        title: 'A popular comment #2',
        description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        noteId: 1
      },
      {
        commentId: 3,
        title: 'A popular comment #3',
        description: 'Per inceptos himenaeos. Duis ullamcorper sagittis nisi.',
        noteId: 1
      },
      {
        commentId: 4,
        title: 'A popular comment #1',
        description: 'Fusce id tincidunt eros, eget vehicula elit.',
        noteId: 2
      },
      {
        commentId: 5,
        title: 'A popular comment #2',
        description: 'Inceptos himenaeos, Duis ullamcorper sagittis nisi.',
        noteId: 2
      },
      {
        commentId: 6,
        title: 'A popular comment #1',
        description: 'Fusce id tincidunt eros, eget vehicula elit. Etiam dapibus.',
        noteId: 3
      },
      {
        commentId: 7,
        title: 'A popular comment #1',
        description: 'Vel auctor augue feugiat vel. Maecenas elementum elit sit amet.',
        noteId: 4
      },
      {
        commentId: 8,
        title: 'A popular comment #1',
        description: 'Proin sed dui id erat sollicitudin aliquet sed sit amet magna. Pellentesque.',
        noteId: 5
      },
      {
        commentId: 9,
        title: 'A popular comment #2',
        description: 'Aliquet sed sit amet magna. Pellentesque rutrum diam et nulla mattis.',
        noteId: 5
      },
      {
        commentId: 10,
        title: 'A popular comment #3',
        description: 'Fusce ultrices vestibulum posuere. Vivamus pretium mi ac orci ullamcorper.',
        noteId: 7
      },
      {
        commentId: 11,
        title: 'A popular comment #5',
        description: 'Eu accumsan felis tincidunt. Etiam et molestie dui.',
        noteId: 7
      },
      {
        commentId: 12,
        title: 'A popular comment #8',
        description: 'Phasellus quis augue tempor, vestibulum justo et, feugiat lacus.',
        noteId: 9
      },
      {
        commentId: 13,
        title: 'A popular comment #8',
        description: 'Morbi sed lorem eu tortor dapibus malesuada ut at libero.',
        noteId: 10
      },
      {
        commentId: 14,
        title: 'A popular comment #1',
        description: 'Est eu erat varius euismod. Aenean sed ut diam eu vitae lectus.',
        noteId: 11
      },
      {
        commentId: 15,
        title: 'A popular comment #3',
        description: 'Placerat est eu erat varius euismod. Aenean sed felis ut diam.',
        noteId: 11
      },
      {
        commentId: 16,
        title: 'A popular comment #6',
        description: 'Pellentesque. Nullam placerat est eu erat varius.',
        noteId: 11
      },
      {
        commentId: 17,
        title: 'A popular comment #9',
        description: 'Nullam placerat est eu erat varius euismod.',
        noteId: 11
      },
      {
        commentId: 18,
        title: 'A popular comment #8',
        description: 'Tincidunt dolor lacinia. Pellentesque varius et augue vel vehicula.',
        noteId: 12
      },
      {
        commentId: 19,
        title: 'A popular comment #11',
        description: 'Nam sagittis diam id purus malesuada, vel tincidunt dolor lacinia.',
        noteId: 12
      }
    ];
  }

  public getCommentsApi(): Observable<SnuComments[]> {
    return of(this.dataComments).pipe(
      delay(1500)
    );
  }

  public getCommentsByNoteIdApi(noteId: number): Observable<SnuComments[]> {
    return of(this.dataComments.filter(value => value.noteId === noteId)).pipe(
      delay(1500)
    );
  }
}
