import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'snu-search-note',
  templateUrl: './snu-search-note.component.html',
  styleUrls: ['./snu-search-note.component.css']
})
export class SnuSearchNoteComponent implements OnInit {

  src: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  search(src: string): void {
  }

}
