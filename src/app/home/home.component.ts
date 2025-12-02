import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent, ServiceCard } from '../cards/service-card/service-card.component';
import { PortfolioItemComponent } from '../cards/portfolio-item/portfolio-item.component';
import { HomeDataService } from '../services/home-data.service';
import { Project } from '../models/project';
import { ApiService } from '../services/api.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ServiceCardComponent,
    PortfolioItemComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serviceCards: ServiceCard[] = [];
  portfolioItems: Project[] = [];

  constructor(private homeDataService: HomeDataService, private apiService: ApiService) { }

  async ngOnInit() {
    this.serviceCards = this.homeDataService.getServiceCards();

    const result = await this.apiService.getProjects();
    if (result.success && result.data) {
      this.portfolioItems = result.data;
    } else {
      console.error('Error getting projects:', result.error);
    };
  }
}
