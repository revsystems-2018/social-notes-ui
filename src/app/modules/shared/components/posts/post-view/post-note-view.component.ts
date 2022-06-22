import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SnuPosts} from '../../../../../api/snu-posts';
import {NoteViewResponse} from '../properties/note-view.response';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-note-view.component.html',
  styleUrls: ['./post-note-view.component.css']
})
export class PostNoteViewComponent implements OnInit, OnDestroy {
  @Input() public userId?: string;
  @Input() public imageBackground?: string;

  @Output() public refreshActivated: EventEmitter<string>;
  @Output() public proceedActivated: EventEmitter<NoteViewResponse>;
  @Output() public finalizeActivated: EventEmitter<SnuPosts>;

  public formGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.imageBackground = 'https://i.ibb.co/37V3wJW/e6bbb63fb1a7ba8c27dbcb652cbe1860.jpg';
    this.proceedActivated = new EventEmitter<NoteViewResponse>();
    this.finalizeActivated = new EventEmitter<SnuPosts>();
    this.refreshActivated = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this._buildFormGroup();
  }

  ngOnDestroy(): void {
    this.finalizeActivated.emit(this._buildPostView());
  }

  public onClickRefresh(): void {
    this.refreshActivated.emit(this.imageBackground);
  }

  public onClickProceed(): void {
    this.proceedActivated.emit(this._buildNoteView());
  }

  private _buildFormGroup(): void {
    this.formGroup = this._formBuilder.group({
      title: '',
      description: '',
      author: ''
    });
  }

  private _buildNoteView(): NoteViewResponse {
    return {
      title: (this.formGroup.get('title') as FormControl).value,
      description: (this.formGroup.get('description') as FormControl).value,
      author: (this.formGroup.get('author') as FormControl).value
    };
  }

  private _buildPostView(): SnuPosts {
    return {
      postId: 24,
      title: (this.formGroup.get('title') as FormControl).value,
      description: (this.formGroup.get('description') as FormControl).value,
      userName: (this.formGroup.get('author') as FormControl).value,
      background: this.imageBackground
    };
  }
}
