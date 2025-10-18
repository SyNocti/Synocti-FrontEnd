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
      id: 'web',
      titleKey: 'services.servicesList.web.title',
      descriptionKey: 'services.servicesList.web.description',
      featuresKey: 'services.servicesList.web.features'
    },
    {
      id: 'mobile',
      titleKey: 'services.servicesList.mobile.title',
      descriptionKey: 'services.servicesList.mobile.description',
      featuresKey: 'services.servicesList.mobile.features'
    },
    {
      id: 'desktop',
      titleKey: 'services.servicesList.desktop.title',
      descriptionKey: 'services.servicesList.desktop.description',
      featuresKey: 'services.servicesList.desktop.features'
    },
    {
      id: 'hosting',
      titleKey: 'services.servicesList.hosting.title',
      descriptionKey: 'services.servicesList.hosting.description',
      featuresKey: 'services.servicesList.hosting.features'
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
