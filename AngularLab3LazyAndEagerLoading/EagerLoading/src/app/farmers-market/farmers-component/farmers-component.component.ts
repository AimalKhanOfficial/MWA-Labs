import { Component, OnInit } from '@angular/core';
import { FarmersMarketServiceService } from '../../farmers-market-service.service';
import { ActivatedRoute } from '@angular/router';
// import { of } from "rxjs";
// import { filter } from "rxjs/operators";

@Component({
  selector: 'app-farmers-component',
  templateUrl: './farmers-component.component.html',
  styleUrls: ['./farmers-component.component.css']
})
export class FarmersComponentComponent implements OnInit {

  farmsData: any[];

  detailsFarmData: any[];

  constructor(private farmsDataService: FarmersMarketServiceService, private route: ActivatedRoute) {
    route.params.subscribe(param => {
      // of(farmsDataService.getData())
      // .pipe(
      //   filter(obj => obj._id === param)
      // )
      // .subscribe(obj => {
      //   console.log(obj);
      // });

      this.farmsData = this.farmsDataService.getData();
      this.farmsData.forEach((elm)=> {
        if(elm._id == param.id){
          this.detailsFarmData = elm;
        }
      });
    });
  }

  ngOnInit() {
    console.log("Init");
    this.farmsData = this.farmsDataService.getData();
  }
}
