import { Component, OnInit } from '@angular/core';
import { ICandidate } from 'src/app/shared/models/candidate/candidate';
import { CandidateService } from 'src/app/modules/candidate/core/candidate.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CandidateFormComponent } from '../candidate-form/candidate-form.component';
import { Header } from 'primeng/api';
import { Headers } from 'src/app/shared/constant/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService]

})
export class HomeComponent implements OnInit {

  candidates: ICandidate[] = [];
  ref: DynamicDialogRef | undefined;
  header: string = "";

  constructor(private candidateservice: CandidateService, public dialogService: DialogService, private http: HttpClient, private authService: MsalService) { }

  ngOnInit(): void {
    this.candidateservice.getCandidates().subscribe(res => {
      this.candidates = res;
    })
  }

  candidateForm(candidate: ICandidate | null) {
    this.ref = this.dialogService.open(CandidateFormComponent, {
      data: {
        candidate: candidate,
        close: this.closeForm.bind(this),
      },
      header: candidate == null ? Headers.AddCandidate : Headers.EditCandidate
    })
  }

  closeForm() {
    this.ref?.close();
    this.ngOnInit();
  }

  deleteCandidate(candidate: ICandidate) {
    if (candidate.id != null) {
      this.candidateservice.deleteCandidate(candidate.id).subscribe(res => {
      });
    }
  }

}
