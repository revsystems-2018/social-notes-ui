import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {SnuComments} from '../../../../../api/snu-comments';

@Component({
  selector: 'add-comment-view',
  templateUrl: './add-comment-view.component.html',
  styleUrls: ['./add-comment-view.component.css']
})
export class AddCommentViewComponent implements OnInit {
  @Input() public isUpdateView?: boolean;

  @Output() public proceedActivated: EventEmitter<SnuComments>;

  public formGroup!: FormGroup;

  public readonly CREATE_TITLE: string = 'Create Comment Details';
  public readonly UPDATE_TITLE: string = 'Update Comment Details';

  constructor(private _formBuilder: FormBuilder) {
    this.proceedActivated = new EventEmitter<SnuComments>();
  }

  ngOnInit(): void {
    this._buildFormGroup();
  }

  public onClickProceed(): void {
    this.proceedActivated.emit(this._BuildComment());
  }

  private _buildFormGroup(): void {
    this.formGroup = this._formBuilder.group({
      title: '',
      description: '',
      author: ''
    });
  }

  private _BuildComment(): SnuComments {
    return {
      commentId: 24,
      title: (this.formGroup.get('title') as FormControl).value,
      description: (this.formGroup.get('description') as FormControl).value,
      userName: (this.formGroup.get('author') as FormControl).value
    };
  }
}
