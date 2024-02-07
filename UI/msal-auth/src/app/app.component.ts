import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private msalService: MsalService) { }

    ngOnInit(): void {
        this.handleRedirectCallback();
    }

    loginDisplay(): boolean {
        return this.msalService.instance.getActiveAccount() != null;
    }

    login() {
        this.msalService.loginRedirect();
    }

    handleRedirectCallback() {
        this.msalService.handleRedirectObservable().subscribe((response: AuthenticationResult) => {
            if (response !== null && response.account !== null) {
                this.msalService.instance.setActiveAccount(response.account);
            }
        });
    }

    logout() {
        this.msalService.logout();
    }
}
