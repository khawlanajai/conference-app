import { Component, input, output } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  conference = input<Conference | null>(null);   // parent → enfant
  closed = output<void>();                       // enfant → parent
}