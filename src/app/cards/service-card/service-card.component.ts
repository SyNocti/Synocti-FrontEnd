import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface ServiceCard {
  icon: string;
  titleKey: string;      // Changed from title to titleKey
  descriptionKey: string; // Changed from description to descriptionKey
  link: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  @Input() service: ServiceCard = {
    icon: 'fa-code',
    titleKey: 'default.title',
    descriptionKey: 'default.description',
    link: '#'
  };
}
