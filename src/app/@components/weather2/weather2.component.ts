import { Component } from '@angular/core';
import { HttpclientService } from '../../@APIservice/httpclient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather2',
  imports: [CommonModule],
  templateUrl: './weather2.component.html',
  styleUrl: './weather2.component.scss'
})
export class Weather2Component {
  constructor(private apitool:HttpclientService){}

  weatherIcon = '';
  weatherText = '';

  AllInfo:any[]=[];
  locationsName!: string;
  AreaName='';
  currentweather:any[]=[];
  nowTime=new Date();
  selectedDistrictName = '';
  weathertype='';


  ngOnInit(): void {
    this.apitool
    .getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-06BF3EEA-8045-4FD0-8EB3-43B4F1795588&limit=15')
    .subscribe((res:any)=>{
      console.log(res);
      const all = res.records.Locations[0];//進到資料
      this.locationsName = all.LocationsName;//高雄市
      this.AllInfo = all.Location;//所有地區資料

      if (this.AllInfo.length > 0) {
        this.selectdis(this.AllInfo[0]);
      }
      }); //進入網站之後先選一個畫面
  }

    selectdis(AllInfo:any){
      this.AreaName=AllInfo.LocationName
      this.currentweather=AllInfo.WeatherElement
      this.selectedDistrictName = AllInfo.LocationName; // ⭐關鍵

    }

    // if (code:number === 1) {
    //   this.weathertype = Clear
    // } else if(code>1 && code<=7){
    //   this.weathertype = Cloudy
    // }

  getWeatherIcon(code: number): string {
  if ([15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41].includes(code)) return '/img/Thunderstorm.png';
  if (code === 1) return '/img/clear.png';
  if ([25,26,27,28].includes(code)) return '/img/CloudyFog.png';
  if ([2,3,4].includes(code)) return '/img/partialclear.png';
  if ([5,6,7].includes(code)) return '/img/cloudy.png';
  if ([24].includes(code)) return '/img/fog.png';
  if ([8,9,10,11,12,13,14].includes(code)) return '/img/rain.png';
  if ([23, 37, 42].includes(code)) return '/img/snow.png';
  return '/img/default.png';
}










}
