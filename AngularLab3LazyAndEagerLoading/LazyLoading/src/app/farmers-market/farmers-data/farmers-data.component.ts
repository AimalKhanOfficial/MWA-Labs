import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmersMarketService } from '../../farmers-market.service';

@Component({
  selector: 'app-farmers-data',
  templateUrl: './farmers-data.component.html',
  styleUrls: ['./farmers-data.component.css']
})
export class FarmersDataComponent implements OnInit {
  farmsData: any[];

  detailsFarmData: any[];

  constructor(private farmsDataService: FarmersMarketService, private route: ActivatedRoute) {
    console.log("Here");
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
