import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent, ServiceCard } from '../cards/service-card/service-card.component';
import { PortfolioItemComponent } from '../cards/portfolio-item/portfolio-item.component';
import { TestimonialItemComponent, TestimonialItem } from '../cards/testimonial-item/testimonial-item.component';
import { HomeDataService } from '../services/home-data.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { SectionSeparatorComponent } from '../shared/section-separator/section-separator.component';
import { Project } from '../models/project';
import { ProjectsService } from '../services/projects.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ServiceCardComponent,
    PortfolioItemComponent,
    TestimonialItemComponent,
    CarouselComponent,
    SectionSeparatorComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serviceCards: ServiceCard[] = [];
  portfolioItems: Project[] = [];
  testimonials: TestimonialItem[] = [];

  constructor(private homeDataService: HomeDataService, private projectsService: ProjectsService) { }

  async ngOnInit() {
    this.serviceCards = this.homeDataService.getServiceCards();
    //this.testimonials = this.homeDataService.getTestimonials();

    const result = await this.projectsService.getProjects();
    if (result.success) {
      this.portfolioItems = result.data;
    } else {
      console.error('Error getting projects:', result.error);
    };
  }
}
