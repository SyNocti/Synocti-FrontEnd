import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfferedServiceDataService, Service } from '../services/offered-service-data.service';
import { PricingCardComponent } from '../cards/pricing-card/pricing-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-offered-service',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PricingCardComponent,
    TranslateModule
  ],
  templateUrl: './offered-service.component.html',
  styleUrl: './offered-service.component.css'
})
export class OfferedServiceComponent implements OnInit {
  services: Service[] = [];

  constructor(private serviceDataService: OfferedServiceDataService) { }

  ngOnInit(): void {
    this.services = this.serviceDataService.getServices();
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
