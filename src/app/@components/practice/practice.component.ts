import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  // // practice1
  // fruits=["apple","banana","pineapple"];

  // practice2
  // fruits=[
  //   {
  //     name:'apple',
  //     color:'red'
  //   },
  //   {
  //     name:'banana',
  //     color:'yellow'
  //   }
  // ]
  // practice3
  // selected='';
  // // selectFruit(name:string){
  // //   this.selected=name;
  // // }

  // practice4
  // fruitdetail:any=null;
  // selectfruit(fruit:any){
  //   this.fruitdetail=fruit
  // };

  // practice5
  // fruits=[
  //   {
  //     name:"apple",
  //     vitamin:['A','C']
  //   },

  //   {
  //     name:"banana",
  //     vitamin:['B6','C']
  //   }
  // ];

  // Advanced Practice

  fruits = [
  {
    name: '蘋果',
    icon: '🍎',
    vitamins: ['A', 'C']
  },
  {
    name: '香蕉',
    icon: '🍌',
    vitamins: ['B6', 'C']
  },
  {
    name: '橘子',
    icon: '🍊',
    vitamins: ['C']
  }
];

SelectedFruit:string='';
fruitDetail:any[]=[];

SelectItem(name:string){
  this.SelectedFruit=name


};











}
