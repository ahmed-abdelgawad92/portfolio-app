import { EventEmitter } from "@angular/core";

export class HomeService{
    scrollEvent = new EventEmitter<string>();
    scrollPosition = new EventEmitter<string>();
}