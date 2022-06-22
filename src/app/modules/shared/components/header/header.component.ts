import { Component, OnInit } from '@angular/core';
import {SnuNotes} from '../../../../api/snu-notes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Note Headers');
  }

  public addNote(): void {
    const dataNote: SnuNotes = {
      id: 1,
      title: 'Pepe Penguin',
      userId: "a34ec56",
      description: 'the first note in my application',
      image: 'https://lh3.googleusercontent.com/6HflexEwmSHOXAZm…Q3fstUY-y2yQlFFuU7NU62-e_BEFJ4NuElo1srPBmNAw=w556'
    }
  }

}
