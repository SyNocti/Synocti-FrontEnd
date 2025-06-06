import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';
import { SectionSeparatorComponent } from '../shared/section-separator/section-separator.component';
import { OfferedServiceDataService, Service, ComparisonFeature } from '../services/offered-service-data.service';
import { PricingCardComponent } from '../cards/pricing-card/pricing-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offered-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    SectionSeparatorComponent,
    PricingCardComponent,
    TranslateModule
  ],
  templateUrl: './offered-service.component.html',
  styleUrl: './offered-service.component.css'
})
export class OfferedServiceComponent implements OnInit {
  services: Service[] = [];
  comparisonFeatures: ComparisonFeature[] = [];
  
  constructor(private serviceDataService: OfferedServiceDataService) { }

  ngOnInit(): void {
    this.services = this.serviceDataService.getServices();
    this.comparisonFeatures = this.serviceDataService.getComparisonFeatures();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openVideo(): void {
    // Video opening functionality
  }
}
