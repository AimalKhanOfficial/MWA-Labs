import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmersMarketServiceService {
  private farms: any[];
  constructor() {
    this.farms = [
      {
        _id: 1,
        Farm: "Natural Prairie",
        produce: ["Lettuce", "Tomato"]
      }, 
      {
        _id: 2,
        Farm: "Fairfield Iowa",
        produce: ["Tomato"]
      }
    ];
  }

  getData() {
    return this.farms;
  }
}
