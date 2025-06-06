import { Injectable } from '@angular/core';
import { ServiceCard } from '../cards/service-card/service-card.component';
import { TestimonialItem } from '../cards/testimonial-item/testimonial-item.component';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  private serviceCards: ServiceCard[] = [
    {
      icon: 'fa-file-alt',
      titleKey: 'services.servicesList.singlePage.title',
      descriptionKey: 'services.servicesList.singlePage.description',
      link: '/services'
    },
    {
      icon: 'fa-layer-group',
      titleKey: 'services.servicesList.multiPage.title',
      descriptionKey: 'services.servicesList.multiPage.description',
      link: '/services'
    },
    {
      icon: 'fa-sync-alt',
      titleKey: 'services.servicesList.dynamicSite.title',
      descriptionKey: 'services.servicesList.dynamicSite.description',
      link: '/services'
    },
    {
      icon: 'fa-user-shield',
      titleKey: 'services.servicesList.clientPortal.title',
      descriptionKey: 'services.servicesList.clientPortal.description',
      link: '/services'
    }
  ];

  private testimonials: TestimonialItem[] = [
    {
      quoteKey: 'home.testimonials.items.first.quote',
      authorNameKey: 'home.testimonials.items.first.authorName',
      authorTitleKey: 'home.testimonials.items.first.authorTitle',
      authorImage: '/assets/images/testimonials/person1.jpg'
    },
    {
      quoteKey: 'home.testimonials.items.second.quote',
      authorNameKey: 'home.testimonials.items.second.authorName',
      authorTitleKey: 'home.testimonials.items.second.authorTitle',
      authorImage: '/assets/images/testimonials/person2.jpg'
    },
    {
      quoteKey: 'home.testimonials.items.third.quote',
      authorNameKey: 'home.testimonials.items.third.authorName',
      authorTitleKey: 'home.testimonials.items.third.authorTitle',
      authorImage: '/assets/images/testimonials/person3.jpg'
    }
  ];

  constructor() { }

  getServiceCards(): ServiceCard[] {
    return this.serviceCards;
  }

  getTestimonials(): TestimonialItem[] {
    return this.testimonials;
  }
}
