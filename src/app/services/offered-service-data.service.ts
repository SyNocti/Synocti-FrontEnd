import { Injectable } from '@angular/core';

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string;
  monthlyPrice: string;
  setupPrice: string;
}

export interface ComparisonFeature {
  nameKey: string;
  singlePage: boolean | string;
  multiPage: boolean | string;
  dynamicSite: boolean | string;
  tooltipKey?: string;
  scrollTo?: string;
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
      featuresKey: 'services.servicesList.singlePage.features',
      monthlyPrice: '$20',
      setupPrice: '$500',
    },
    {
      id: 'multi-page',
      titleKey: 'services.servicesList.multiPage.title',
      descriptionKey: 'services.servicesList.multiPage.description',
      featuresKey: 'services.servicesList.multiPage.features',
      monthlyPrice: '$30',
      setupPrice: '$750',
    },
    {
      id: 'dynamic-website',
      titleKey: 'services.servicesList.dynamicSite.title',
      descriptionKey: 'services.servicesList.dynamicSite.description',
      featuresKey: 'services.servicesList.dynamicSite.features',
      monthlyPrice: '$50',
      setupPrice: '$750',
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
