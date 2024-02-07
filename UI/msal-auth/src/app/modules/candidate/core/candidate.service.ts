import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { protectedResources } from '../../../shared/models/auth-config';
import { ICandidate } from '../../../shared/models/candidate/candidate';

@Injectable({
    providedIn: 'root'
})
export class CandidateService {
    url = protectedResources.candidateAPI.endpoint;

    constructor(private http: HttpClient) { }

    getCandidates() {
        return this.http.get<ICandidate[]>(this.url);
    }

    getCandidate(id: number) {
        return this.http.get<ICandidate>(this.url + '/' + id);
    }

    postCandidate(candidate: ICandidate) {
        candidate.id = parseInt(new Date().getTime().toString(), 10);
        console.log(protectedResources.candidateAPI.scopes);
        
        return this.http.post<ICandidate>(this.url, candidate);
    }

    deleteCandidate(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

    editCandidate(candidate: ICandidate) {
        return this.http.put<ICandidate>(this.url + '/' + candidate.id, candidate);
    }
}
