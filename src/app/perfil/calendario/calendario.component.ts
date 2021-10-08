import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth'
  // };
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'es',
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
}
