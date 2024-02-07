import { Component, OnInit } from '@angular/core';
import { ICandidate } from 'src/app/shared/models/candidate/candidate';
import { CandidateService } from 'src/app/modules/candidate/core/candidate.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CandidateFormComponent } from '../candidate-form/candidate-form.component';
import { Headers } from 'src/app/shared/constant/constants';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
import { Account } from 'src/app/shared/models/services/role-guard.service';
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
  role: string | undefined = "";
  
  constructor(private candidateservice: CandidateService, public dialogService: DialogService, private http: HttpClient, private authService: MsalService) { }

  ngOnInit(): void {
    this.candidateservice.getCandidates().subscribe(res => {
      this.candidates = res;
    })
    let role = this.authService.instance.getAllAccounts()[0].idTokenClaims?.roles;
    this.role = String(role);
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
