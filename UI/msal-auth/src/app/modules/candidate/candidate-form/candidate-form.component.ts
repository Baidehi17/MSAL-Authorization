import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ICandidate } from 'src/app/shared/models/candidate/candidate';
import { CandidateForm } from 'src/app/shared/models/candidate/candidate-from';
import { CandidateService } from 'src/app/modules/candidate/core/candidate.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit{

  candidateForm: FormGroup<CandidateForm> = new FormGroup<CandidateForm>(new CandidateForm({}));

  constructor(private config:DynamicDialogConfig,private discardModalRef: DynamicDialogRef,private candidateService:CandidateService){}

  ngOnInit(): void {
    if(this.config.data.candidate!==null){
      this.candidateForm.patchValue(this.config.data.candidate);
    }
  }

  closeForm(){
    this.discardModalRef.close();
  }

  saveForm(){
    if(this.candidateForm.value.id && this.candidateForm.valid){
      this.candidateService.editCandidate(this.candidateForm.value as ICandidate).subscribe(res=>{})
    }
    else{
      this.candidateService.postCandidate(this.candidateForm.value as ICandidate).subscribe(res=>{})
    }
    this.candidateForm.markAllAsTouched();
    this.config.data.close("close");
  }
}
