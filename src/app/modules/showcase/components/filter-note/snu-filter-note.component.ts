import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snu-filter-note',
  templateUrl: './snu-filter-note.component.html',
  styleUrls: ['./snu-filter-note.component.css']
})
export class SnuFilterNoteComponent implements OnInit {

  test = [...Array(12).keys()]

  constructor() { }

  ngOnInit(): void {
  }

}
