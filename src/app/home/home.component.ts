import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies = [
    { id: 1, title: 'Movie 1', director: 'Director A' },
    { id: 2, title: 'Movie 2', director: 'Director B' },
    { id: 3, title: 'Movie 3', director: 'Director C' },]
}
