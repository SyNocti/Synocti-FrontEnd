import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';
import { SectionSeparatorComponent } from '../shared/section-separator/section-separator.component';
import { SocialIconComponent } from '../shared/social-icon/social-icon.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    SectionSeparatorComponent,
    SocialIconComponent,
    TranslateModule
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers = [
    {
      nameKey: 'team.members.hugo.name',
      roleKey: 'team.members.hugo.role',
      bioKey: 'team.members.hugo.bio',
      image: 'assets/images/hugo.png',
      socials: [
        { link: 'https://www.linkedin.com/in/hugolevacher/', icon: 'fab fa-linkedin' },
        { link: 'https://github.com/hugolevacher', icon: 'fab fa-github' },
        { link: 'https://hugolevacher.com/', icon: 'fas fa-briefcase' },
      ]
    },
    {
      nameKey: 'team.members.henri.name',
      roleKey: 'team.members.henri.role',
      bioKey: 'team.members.henri.bio',
      image: 'assets/images/henri.jpg',
      socials: [
        { link: 'https://www.linkedin.com/in/henri-saumure-79967636b/', icon: 'fab fa-linkedin' },
        { link: 'https://github.com/HenriSaumure', icon: 'fab fa-github' },
        { link: 'https://saumure.com/', icon: 'fas fa-briefcase' },
      ]
    }
  ];
}
