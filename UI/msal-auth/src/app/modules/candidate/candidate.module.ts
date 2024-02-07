import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { HomeComponent } from './home/home.component';

import { TableModule } from 'primeng/table';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    HomeComponent,
    CandidateFormComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    CandidateRoutingModule,
    ButtonModule,
    DynamicDialogModule,
    InputTextareaModule,
    InputTextModule
  ]
})
export class CandidateModule { }
