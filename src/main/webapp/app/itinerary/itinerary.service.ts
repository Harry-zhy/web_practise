import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';

@Injectable({ providedIn: 'root' })
export class ItineraryService {
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  // setEventDateTime(eventTimings: ) {}
}
