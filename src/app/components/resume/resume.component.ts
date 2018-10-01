import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume/resume.service';
import { Resume } from '../../models/Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService) { 
  }

  ngOnInit() {
    this.resume = this.resumeService.getResume()
  }


}
