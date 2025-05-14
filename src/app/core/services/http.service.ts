import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants/http';
import { IHttpResponse } from 'src/app/interfaces/http';

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient
    ) {}

  async get(url: string, params?: any): Promise<IHttpResponse> {
    const reqUrl = `${API_URL}/${url}`;
    const options = { params };

    return new Promise((resolve) => {
      this.http.get(reqUrl, options)
        .subscribe({
          next: (response: any) => {
            resolve({ data: response.data, error: undefined });
          },
          error: (error) => {
            resolve({ data: undefined, error });
          }
        });
    });
  }
}
