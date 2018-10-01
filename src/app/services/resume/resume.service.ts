import { Injectable } from '@angular/core';
import { Resume } from '../../models/Resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {



  constructor() {
  }

  getResume(): Resume {
    return {
      path: "../../../assets/RESUME.pdf",
      mimeType: "application/pdf"
    };
  }

}
