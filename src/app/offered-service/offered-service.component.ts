import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfferedServiceDataService, Service, Technology } from '../services/offered-service-data.service';
import { PricingCardComponent } from '../cards/pricing-card/pricing-card.component';
import { TechnologyCardComponent } from '../cards/technology-card/technology-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-offered-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PricingCardComponent,
    TechnologyCardComponent,
    TranslateModule,
    NgxMarqueeComponent
  ],
  templateUrl: './offered-service.component.html',
  styleUrl: './offered-service.component.css'
})
export class OfferedServiceComponent implements OnInit {
  services: Service[] = [];
  technologies: Technology[] = [];

  constructor(private serviceDataService: OfferedServiceDataService) { }

  ngOnInit(): void {
    this.services = this.serviceDataService.getServices();
    this.technologies = this.serviceDataService.getTechnologies();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
