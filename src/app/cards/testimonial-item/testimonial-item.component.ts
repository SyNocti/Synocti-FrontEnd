import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface TestimonialItem {
  quoteKey: string;         // Changed from quote
  authorNameKey: string;    // Changed from authorName
  authorTitleKey: string;   // Changed from authorTitle
  authorImage: string;
}

@Component({
  selector: 'app-testimonial-item',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonial-item.component.html',
  styleUrl: './testimonial-item.component.css'
})
export class TestimonialItemComponent {
  @Input() testimonial: TestimonialItem = {
    quoteKey: 'default.quote',
    authorNameKey: 'default.name',
    authorTitleKey: 'default.title',
    authorImage: ''
  };
}
