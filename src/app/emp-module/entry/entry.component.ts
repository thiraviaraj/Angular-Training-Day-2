import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }

  ngOnInit(): void {
  }
  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }
}
