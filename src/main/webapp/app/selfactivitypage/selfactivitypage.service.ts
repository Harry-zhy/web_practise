import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { IActivitySelf } from 'app/entities/activity-self/activity-self.model';

import { NewActivitySelf } from 'app/entities/activity-self/activity-self.model';

@Injectable({ providedIn: 'root' })
export class SelfActivitiesService {
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  getSelfActivityName(selfA: IActivitySelf): Observable<any> {
    return this.http.post(this.applicationConfigService.getEndpointFor('api/activity-selvesOneName'), selfA);
  }

  getSelfActivityDescription(selfA: IActivitySelf): Observable<any> {
    return this.http.post(this.applicationConfigService.getEndpointFor('api/activity-selvesDescription'), selfA);
  }

  getSelfActivityIdeas(selfA: IActivitySelf): Observable<any> {
    return this.http.post(this.applicationConfigService.getEndpointFor('api/activity-selvesIdeas'), selfA);
  }

  getSelfActivityImages(selfA: IActivitySelf): Observable<any> {
    return this.http.post(this.applicationConfigService.getEndpointFor('api/activity-selvesImages'), selfA);
  }

  getSelfActivityRating(selfA: IActivitySelf): Observable<any> {
    return this.http.post(this.applicationConfigService.getEndpointFor('api/activity-selvesRating'), selfA);
  }
}
