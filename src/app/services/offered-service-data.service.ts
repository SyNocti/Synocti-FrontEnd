import { Injectable } from '@angular/core';

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  featuresKey: string;
  icon: string;
}

export interface Technology {
  name: string;
  logo: string;
  category: string;
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
      featuresKey: 'services.servicesList.web.features',
      icon: 'fa-globe'
    },
    {
      id: 'mobile',
      titleKey: 'services.servicesList.mobile.title',
      descriptionKey: 'services.servicesList.mobile.description',
      featuresKey: 'services.servicesList.mobile.features',
      icon: 'fa-mobile-alt'
    },
    {
      id: 'desktop',
      titleKey: 'services.servicesList.desktop.title',
      descriptionKey: 'services.servicesList.desktop.description',
      featuresKey: 'services.servicesList.desktop.features',
      icon: 'fa-desktop'
    },
    {
      id: 'hosting',
      titleKey: 'services.servicesList.hosting.title',
      descriptionKey: 'services.servicesList.hosting.description',
      featuresKey: 'services.servicesList.hosting.features',
      icon: 'fa-server'
    }
  ];

  private technologies: Technology[] = [
    { name: 'Angular', logo: 'assets/images/technologies/angular.svg', category: 'frontend' },
    { name: 'React', logo: 'assets/images/technologies/react.svg', category: 'frontend' },
    { name: 'Vue.js', logo: 'assets/images/technologies/vue.svg', category: 'frontend' },
    { name: 'Node.js', logo: 'assets/images/technologies/nodejs.svg', category: 'backend' },
    { name: 'TypeScript', logo: 'assets/images/technologies/typescript.svg', category: 'language' },
    { name: 'Python', logo: 'assets/images/technologies/python.svg', category: 'language' },
    { name: 'Java', logo: 'assets/images/technologies/java.svg', category: 'language' },
    { name: 'MongoDB', logo: 'assets/images/technologies/mongodb.svg', category: 'database' },
    { name: 'PostgreSQL', logo: 'assets/images/technologies/postgresql.svg', category: 'database' },
    { name: 'Docker', logo: 'assets/images/technologies/docker.svg', category: 'devops' },
    { name: 'AWS', logo: 'assets/images/technologies/aws.svg', category: 'cloud' },
    { name: 'Git', logo: 'assets/images/technologies/git.svg', category: 'tool' },
    { name: 'Flutter', logo: 'assets/images/technologies/flutter.svg', category: 'mobile' },
    { name: 'React Native', logo: 'assets/images/technologies/react-native.svg', category: 'mobile' },
    { name: 'Electron', logo: 'assets/images/technologies/electron.svg', category: 'desktop' }
  ];

  constructor() { }

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(service => service.id === id);
  }

  getTechnologies(): Technology[] {
    return this.technologies;
  }
}
