import {Component, Input, OnInit} from '@angular/core';
import {SnuNotes} from '../../../../../api/snu-notes';

@Component({
  selector: 'snu-note-view',
  templateUrl: './snu-note-view.component.html',
  styleUrls: ['./snu-note-view.component.css']
})
export class SnuNoteViewComponent implements OnInit {
  @Input() item!: SnuNotes;

  constructor() {
  }

  ngOnInit(): void {
  }
}
