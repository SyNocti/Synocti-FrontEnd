import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-card.component.html',
  styleUrl: './technology-card.component.css'
})
export class TechnologyCardComponent {
  @Input() name: string = '';
  @Input() logo: string = '';
  @Input() category: string = '';
}
