import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star-screen',
  standalone: true,
  imports: [],
  templateUrl: './star-screen.component.html',
  styleUrl: './star-screen.component.scss'
})
export class StarScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  newGame() {
    //Start game
    this.router.navigateByUrl('/game')
  }



}


