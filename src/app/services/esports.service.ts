import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { esports } from 'src/environments/environment';
import { EsportsData } from '../models/esports.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EsportsService {
  constructor(private http: HttpClient) {}
  getLiveMatches(
    startDate: string,
    endDate: string,
    matchEvent: string
  ): Observable<EsportsData> {
    return this.http.get<EsportsData>(esports.esportsApiBaseUrl, {
      headers: new HttpHeaders()
        .set(esports.XRapidAPIHostHeaderName, esports.XRapidAPIHostHeaderValue)
        .set(esports.XRapidKeyHeaderName, esports.XRapidKeyHeaderValue),
      params: new HttpParams()
        .set('start_date', startDate)
        .set('end_date', endDate)
        .set('match_event', matchEvent)
        .set('mode', 'json'),
    });
  }
}
