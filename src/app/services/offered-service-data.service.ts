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

  private comparisonFeatures: ComparisonFeature[] = [
    {
      nameKey: 'services.comparison.features.clientPortal.name',
      singlePage: true,
      multiPage: true,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.clientPortal.tooltip',
      scrollTo: 'client-portal'
    },
    {
      nameKey: 'services.comparison.features.responsiveDesign.name',
      singlePage: true,
      multiPage: true,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.responsiveDesign.tooltip'
    },
    {
      nameKey: 'services.comparison.features.seoOptimization.name',
      singlePage: true,
      multiPage: true,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.seoOptimization.tooltip'
    },
    {
      nameKey: 'services.comparison.features.domainSetup.name',
      singlePage: true,
      multiPage: true,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.domainSetup.tooltip'
    },
    {
      nameKey: 'services.comparison.features.multiplePages.name',
      singlePage: false,
      multiPage: true,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.multiplePages.tooltip'
    },
    {
      nameKey: 'services.comparison.features.enhancedUX.name',
      singlePage: false,
      multiPage: true,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.enhancedUX.tooltip'
    },
    {
      nameKey: 'services.comparison.features.contentManagement.name',
      singlePage: false,
      multiPage: false,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.contentManagement.tooltip'
    },
    {
      nameKey: 'services.comparison.features.customForms.name',
      singlePage: false,
      multiPage: false,
      dynamicSite: true,
      tooltipKey: 'services.comparison.features.customForms.tooltip'
    },
  ];

  constructor() { }

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }

  getComparisonFeatures(): ComparisonFeature[] {
    return this.comparisonFeatures;
  }
}
