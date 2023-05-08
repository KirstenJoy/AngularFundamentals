import { Injectable } from "@angular/core"
import { Subject, map } from "rxjs";
import { EventService } from "./shared/events.service";

@Injectable()
export class EventListResolver{
constructor(private eventService:EventService){

}

resolve(){
  return this.eventService.getEvents().pipe(map(events => events))
}
}
