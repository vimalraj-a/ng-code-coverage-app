import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() {}
  isValid(resp: any) {
    return resp && resp.isSuccess;
  }
}
