import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

const domain = 'https://localhost:7257/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  // Mock data to use until API is ready
  private projects: Project[] = [
    new Project(
      '1',
      'tempProjectData.choculaterie.title',
      'tempProjectData.choculaterie.type',
      'tempProjectData.choculaterie.description',
      1,
      'https://choculaterie.com/',
      2024,
      'Choculat'
    ),
    new Project(
      '2',
      'tempProjectData.hugoPortfolio.title',
      'tempProjectData.hugoPortfolio.type',
      'tempProjectData.hugoPortfolio.description',
      2,
      'https://hugolevacher.com/',
      2025,
      'Hugo Levacher'
    ),
    new Project(
      '3',
      'tempProjectData.henriPortfolio.title',
      'tempProjectData.henriPortfolio.type',
      'tempProjectData.henriPortfolio.description',
      3,
      'https://saumure.com/',
      2025,
      'Henri Saumure'
    ),
  ];

  constructor(public http: HttpClient, private translateService: TranslateService) { }

  async getProjects(): Promise<any> {
    // try {
    //   const response = await firstValueFrom(
    //     this.http.get(domain + 'api/OurCompany/Projects/GetAllProjects')
    //   );
    //   return { success: true, data: response };
    // } catch (error) {
    //   return { success: false, error };
    // }

    //DELETE EVERYTHING BELOW THIS LINE WHEN API IS READY
    await this.waitForTranslations();
    const translatedProjects = this.projects.map(project => {
      // Create a new project with translated fields
      return new Project(
        project.id,
        this.translateService.instant(project.title),
        this.translateService.instant(project.type),
        this.translateService.instant(project.description),
        project.pictureId,
        project.link,
        project.annee,
        project.client
      );
    });
    return { success: true, data: translatedProjects };
  }
  private async waitForTranslations(): Promise<void> {
    // If translations are already loaded, resolve immediately
    if (this.translateService.currentLang) {
      const currentLang = this.translateService.currentLang;
      if (this.translateService.translations[currentLang]) {
        return Promise.resolve();
      }
    }

    // Otherwise wait for translations to be loaded
    return firstValueFrom(this.translateService.get('common.app.name'));
  }
}
