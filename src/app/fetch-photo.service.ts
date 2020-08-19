import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{pluck} from 'rxjs/operators';

interface UnsplashResponse {
    urls: {
      small: string;
    }
}
@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {
  accessKey = 'FRCy5qZBX910f0Sa8y_9Ajs7kv5tuFSiEzUXzL8P9KE'
  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random/?client_id=' + this.accessKey, {
      params: {
        count: '1'
      }
    })
  }
}
