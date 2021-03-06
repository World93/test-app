import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventData } from '../_Objects/eventData';
import {EventListBase} from '../_Objects/EventListBase';

@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.css']
})
export class EventRowComponent implements OnInit {
  @Input() eventData: EventData;
  @Input() eventWatcher: EventListBase<EventData>;
  @Output() moreDetails = new EventEmitter<EventData>();
  constructor() { }

  private updateEvent() {
    /*if (typeof this.eventWatcher !== 'undefined') {
      this.eventWatcher.addEvent(this.eventData);
    }*/
    this.moreDetails.emit(this.eventData);
  }

  ngOnInit() {
  }

}
