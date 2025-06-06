import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css'
})
export class PortfolioItemComponent {
  @Input() project!: Project;

  constructor() { }
}
