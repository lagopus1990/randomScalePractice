import { Component, OnInit } from '@angular/core';

export interface Pair {
  name: string;
  include: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'Random Scale App';
  interval = 60;
  allKeys: Pair[] = [
    {name: 'A', include: true},
    {name: 'B flat', include: true},
    {name: 'B', include: true},
    {name: 'C', include: true},
    {name: 'C sharp', include: true},
    {name: 'D', include: true},
    {name: 'E flat', include: true},
    {name: 'E', include: true},
    {name: 'F', include: true},
    {name: 'G flat', include: true},
    {name: 'G', include: true},
    {name: 'A flat', include: true},];

  allScales: Pair[] = [
    {name:'Ionian / Major', include: true},
    {name:'Dorian', include: true},
    {name:'Phrygian', include: true},
    {name:'Lydian', include: true},
    {name:'Myxolydian', include: true},
    {name:'Aeolean / natural minor', include: true},
    {name:'Locrian', include: true},
    {name:'Lydian flat7', include: true},
    {name:'Half tone whole tone', include: true},
    {name:'Lydian flat7', include: true},  
    {name:'Spanish / Phrygian Dominant', include: true},
    {name:'Pentatonic Minor', include: true},  
    {name:'Minor Blues', include: true},  
  ];

  key: Pair = {name:'Minor', include: true};
  scale: Pair = {name:'Spanish', include: true};

  selectedScales: Pair[];
  selectedKeys: Pair[];
  intervalId: number = 0;
  panelOpenState = false;
  keysPanelOpenState = false;

  constructor(){
    this.selectedScales = this.allScales;
    this.selectedKeys = this.allKeys;
  }

  ngOnInit(){
    this.key = this.generateRandomItem(this.allKeys, this.key);
    this.scale = this.generateRandomItem(this.allScales, this.scale);
    this.intervalId  = window.setInterval(() => {
          this.key = this.generateRandomItem(this.allKeys, this.key);
          this.scale = this.generateRandomItem(this.allScales, this.scale);
      }, this.interval*1000);
    
  }

  generateRandomItem(allItems: Pair[], currentItem: Pair){
    let excludedList = allItems.filter(item => item != currentItem && item.include);
    if (excludedList.length == 0) return currentItem
    if (excludedList.length  == 1) return excludedList[0];
      return excludedList[Math.floor(Math.random() * excludedList.length)];
  }

  restartInterval(){
    clearInterval(this.intervalId);
    this.intervalId  = window.setInterval(() => {
      this.key = this.generateRandomItem(this.selectedKeys, this.key);
      this.scale = this.generateRandomItem(this.selectedScales, this.scale);
    
      }, this.interval*1000);
  }

  allComplete(allItems: Pair[]): boolean {
    return allItems.filter(item => item.include == false).length == 0;
  }

  someComplete(allItems: Pair[]): boolean {
    if (allItems == null) {
      return false;
    }
    return allItems.filter(item => item.include).length > 0 && ! this.allComplete(allItems) ;
  }
 

  setAll(include: boolean, allItems: Pair[]) {
    if (allItems == null) {
      return;
    }
    allItems.forEach(t => (t.include = include));
  }

  
}
