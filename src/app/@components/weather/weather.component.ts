import { Component } from '@angular/core';
import { HttpclientService } from './../../@APIservice/httpclient.service';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  DatasetDescription!: string;
  locationsName!: string;

  AllInfo: any[] = [];   // 地區所有氣象資料
  AreaName = '';   // 選擇地區
  weather: any[] = [];   // 初始空陣列

  constructor(private apitool:HttpclientService){}

  ngOnInit(): void {
    this.apitool
    .getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-06BF3EEA-8045-4FD0-8EB3-43B4F1795588&limit=3')
    .subscribe((res:any)=>{
      console.log(res);

      const all = res.records.Locations[0];//進到資料
      this.DatasetDescription = all.DatasetDescription;//標題
      this.locationsName = all.LocationsName;//高雄市
      this.AllInfo = all.Location;//所有地區資料


      if (this.AllInfo.length > 0) {
        this.selectLocation(this.AllInfo[0]);
      }
    }); //進入網站之後先選一個畫面
  }

  selectLocation(AllInfo: any) {
   if (!AllInfo) return;
  this.AreaName = AllInfo.LocationName;
  // 確保 WeatherElement 存在且有資料
  this.weather = AllInfo.WeatherElement || [];
  console.log('當前區域天氣資料：', this.weather);
  }

}
