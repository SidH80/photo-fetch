import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {
  accessKey = 'FRCy5qZBX910f0Sa8y_9Ajs7kv5tuFSiEzUXzL8P9KE'
  constructor(private httpClient: HttpClientModule) { }
}
