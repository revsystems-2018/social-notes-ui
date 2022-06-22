import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {SnuComments} from '../../../../api/snu-comments';
import {loadProfileImages} from '../../utils/showcase.utils';

@Component({
  selector: 'comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})
export class CommentsContainerComponent implements OnInit {

  public commentList!: Observable<SnuComments[]>;

  public commentsClosed: EventEmitter<boolean>;

  public fromUpdateComment: boolean;
  public fromAddComment: boolean;
  public profileImages!: string[];

  constructor() {
    this.commentList = new Observable<SnuComments[]>();
    this.commentsClosed = new EventEmitter<boolean>();
    this.profileImages = loadProfileImages();
    this.fromUpdateComment = false;
    this.fromAddComment = false;
  }

  ngOnInit(): void {
  }

  public onClickClose(): void {
    this.commentsClosed.emit(false);
  }

  public onProceedComment(comment: SnuComments): void {

  }
}
