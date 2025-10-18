import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';
import { PortfolioItemComponent } from '../cards/portfolio-item/portfolio-item.component';
import { SectionSeparatorComponent } from '../shared/section-separator/section-separator.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PortfolioItemComponent,
    TranslateModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  async ngOnInit() {
    const result = await this.projectsService.getProjects();
    if (result.success) {
      this.projects = result.data;
    } else {
      console.error('Error getting projects:', result.error);
    }
  }
}
