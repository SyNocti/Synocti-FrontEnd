import { Injectable } from '@angular/core';

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class OfferedServiceDataService {
  private services: Service[] = [
    {
      id: 'single-page',
      titleKey: 'services.servicesList.singlePage.title',
      descriptionKey: 'services.servicesList.singlePage.description',
      featuresKey: 'services.servicesList.singlePage.features'
    },
    {
      id: 'multi-page',
      titleKey: 'services.servicesList.multiPage.title',
      descriptionKey: 'services.servicesList.multiPage.description',
      featuresKey: 'services.servicesList.multiPage.features'
    },
    {
      id: 'dynamic-website',
      titleKey: 'services.servicesList.dynamicSite.title',
      descriptionKey: 'services.servicesList.dynamicSite.description',
      featuresKey: 'services.servicesList.dynamicSite.features'
    }
  ];

  constructor() { }

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }
}
