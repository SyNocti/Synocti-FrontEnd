import { Injectable } from '@angular/core';
import { ServiceCard } from '../cards/service-card/service-card.component';
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

  constructor() { }

  getServiceCards(): ServiceCard[] {
    return this.serviceCards;
  }
}
