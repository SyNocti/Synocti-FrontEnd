import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionSeparatorComponent } from '../shared/section-separator/section-separator.component';
import { BasicCardComponent } from '../cards/basic-card/basic-card.component';
import { FormsService } from '../services/forms.service';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionSeparatorComponent,
    BasicCardComponent,
    HeroSectionComponent,
    TranslateModule
  ],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quoteForm!: FormGroup;
  submitted = false;
  success = false;
  error = false;
  loading = false;
  fileToUpload: File | null = null;
  fileError: string | null = null;

  projectTypes = [
    { key: 'services.servicesList.singlePage.title', value: 'Site web une page' },
    { key: 'services.servicesList.multiPage.title', value: 'Site web multi-pages' },
    { key: 'services.servicesList.dynamicSite.title', value: 'Site web dynamique' },
    { key: 'quote.projectTypes.other', value: 'Autre' }
  ];

  budgetRanges = [
    { key: 'quote.budgetRanges.lessThan500', value: 'Moins de 500$' },
    { key: 'quote.budgetRanges.500To1k', value: '500$ - 1 000$' },
    { key: 'quote.budgetRanges.1kTo2k', value: '1 000$ - 2 000$' },
    { key: 'quote.budgetRanges.2kPlus', value: 'Plus de 2 000$' }
  ];

  contactMethods = [
    { key: 'quote.contactMethods.email', value: 'Email' },
    { key: 'quote.contactMethods.phone', value: 'Phone' },
    { key: 'quote.contactMethods.videoConference', value: 'Video Conference' }
  ];

  faqs = [
    {
      titleKey: 'quote.faqs.timeline.title',
      contentKey: 'quote.faqs.timeline.content'
    },
    {
      titleKey: 'quote.faqs.maintenance.title',
      contentKey: 'quote.faqs.maintenance.content'
    },
    {
      titleKey: 'quote.faqs.information.title',
      contentKey: 'quote.faqs.information.content'
    },
    {
      titleKey: 'quote.faqs.payments.title',
      contentKey: 'quote.faqs.payments.content'
    }
  ];

  constructor(
    private fb: FormBuilder,
    public formsService: FormsService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: ['', [Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]],
      projectType: [this.projectTypes[0].value, Validators.required],
      budgetRange: ['', Validators.required],
      projectDescription: ['', [Validators.required, Validators.minLength(30)]],
      contactMethod: [this.contactMethods[0].value]
    });
  }

  get f() {
    return this.quoteForm.controls;
  }

  onFileChange(event: Event) {
    this.fileError = null;
    const element = event.target as HTMLInputElement;
    const fileList: FileList | null = element.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.fileError = this.translateService.instant('quote.form.file.sizeError');
        this.fileToUpload = null;
        return;
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        this.fileError = this.translateService.instant('quote.form.file.typeError');
        this.fileToUpload = null;
        return;
      }

      this.fileToUpload = file;
    }
  }

  async onSubmit() {
    this.submitted = true;

    // Reset status
    this.success = false;
    this.error = false;

    if (this.quoteForm.invalid) {
      return;
    }

    this.loading = true;

    // Create form data to include file
    const formData = new FormData();
    const formValues = this.quoteForm.value;
    Object.keys(formValues).forEach(key => {
      formData.append(key, formValues[key] || '');
    });

    // Add file if exists
    if (this.fileToUpload) {
      formData.append('file', this.fileToUpload, this.fileToUpload.name);
    }

    // API call to send the form data
    const result = await this.formsService.sendQuoteForm(formData);
    if (result.success) {
      this.success = true;
      this.loading = false;
      this.resetForm();
    } else {
      console.error('Error submitting form:', result.error);
      this.error = true;
      this.loading = false;
    }
  }

  private resetForm(): void {
    this.quoteForm.reset({
      projectType: this.projectTypes[0].value,
      contactMethod: this.contactMethods[0].value
    });
    this.submitted = false;
    this.fileToUpload = null;
  }
}
