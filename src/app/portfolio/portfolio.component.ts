import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApiService } from '../services/api.service';
import { Project } from '../models/project';
import { PortfolioItemComponent } from '../cards/portfolio-item/portfolio-item.component';
import { SectionSeparatorComponent } from '../shared/section-separator/section-separator.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

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

  constructor(private apiService: ApiService, private languageService: LanguageService) { }

  async ngOnInit() {
    const language = this.languageService.getCurrentLanguage();
    const result = await this.apiService.getProjects(language);
    if (result.success && result.data) {
      this.projects = result.data;
    } else {
      console.error('Error getting projects:', result.error);
    }
  }
}
