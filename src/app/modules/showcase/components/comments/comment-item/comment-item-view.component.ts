import {Component, Input, OnInit} from '@angular/core';
import {SnuComments} from '../../../../../api/snu-comments';

@Component({
  selector: 'comment-item-view',
  templateUrl: './comment-item-view.component.html',
  styleUrls: ['./comment-item-view.component.css']
})
export class CommentItemViewComponent implements OnInit {

  @Input() public commentItem!: SnuComments;

  @Input() public profileImage!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
