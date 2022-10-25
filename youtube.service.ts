// requesting youtube api

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }
    
    getChannels(channelName): Observable<any> {
      
// get api key from google console developer
      const API_KEY = "AIzaSyBm6cFWxQn90zR-zW8-5NfBtcPq8wVmawI"

  // get url from youtube google developer using snippet method
      const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+channelName+"&type=channel&key="+API_KEY+""
      
      return this.http.get<any>(url)
      
      }
    }
