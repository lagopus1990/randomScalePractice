import { Component, OnInit } from '@angular/core';
import vexflow from 'vexflow';
import Vex from "vexflow";
import { ScalesService } from './scales.service';

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
  interval = 5;
  allKeys: Pair[] = [
    {name: 'C', include: true},
    {name: 'C sharp', include: true},
    {name: 'D', include: true},
    {name: 'E flat', include: true},
    {name: 'E', include: true},
    {name: 'F', include: true},
    {name: 'G flat', include: true},
    {name: 'G', include: true},
    {name: 'A flat', include: true},
    {name: 'A', include: true},
    {name: 'B flat', include: true},
    {name: 'B', include: true},];

  allScaleTypes: Pair[] = [
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

  allNotes: any;

  key: Pair = {name:'Minor', include: true};
  scaleType: Pair = {name:'Spanish', include: true};

  selectedScaleTypes: Pair[];
  selectedKeys: Pair[];
  intervalId: number = 0;
  panelOpenState = false;
  keysPanelOpenState = false;
  VF = Vex.Flow;
  staff: any;
  renderer: any;
  stave: any;
  context: any;
  voice: any;

  constructor(private scalesService: ScalesService){
    this.selectedScaleTypes = this.allScaleTypes;
    this.selectedKeys = this.allKeys;
  }

  ngOnInit(){
    this.key = this.generateRandomItem(this.allKeys, this.key);
    this.scaleType = this.generateRandomItem(this.allScaleTypes, this.scaleType);
    this.intervalId  = window.setInterval(() => {
          this.key = this.generateRandomItem(this.allKeys, this.key);
          this.scaleType = this.generateRandomItem(this.allScaleTypes, this.scaleType);
          this.redrawStaff();
      }, this.interval*1000);

        this.staff  = document.getElementById("vexflow-player");
        this.renderer = new this.VF.Renderer(this.staff, this.VF.Renderer.Backends.SVG);
        this.renderer.resize(500, 500);
        this.context = this.renderer.getContext();
        this.context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
        this.stave = new this.VF.Stave(10, 40, 400);
        this.stave.addClef("treble");
        this.stave.setContext(this.context).draw(); 
        let keyIndex = this.allKeys.findIndex(item => item == this.key);  
        let scaleTypeIndex = this.allScaleTypes.findIndex(item => item == this.scaleType); 
        const notes = this.scalesService.getScale(keyIndex, scaleTypeIndex);

      
      this.voice = new this.VF.Voice({ num_beats: notes.length, beat_value: 4 });
      this.voice.addTickables(notes);

      new this.VF.Formatter().joinVoices([this.voice]).format([this.voice], 320);
      this.voice.draw(this.context, this.stave);
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
      this.scaleType = this.generateRandomItem(this.selectedScaleTypes, this.scaleType);
    
      }, this.interval*1000);
  }

  redrawStaff(){
    console.log(this.voice.tickables);
    this.voice.tickables.forEach((item: any) => {item.attrs.el.remove()});
    this.voice.tickables = [];
    console.log(this.voice.tickables);
    
    let keyIndex = this.allKeys.findIndex(item => item == this.key);  
    let scaleTypeIndex = this.allScaleTypes.findIndex(item => item == this.scaleType);  
    const notes = this.scalesService.getScale(keyIndex, scaleTypeIndex);
    const voice = new this.VF.Voice({ num_beats: notes.length, beat_value: 4 });
    voice.addTickables(notes);

    new this.VF.Formatter().joinVoices([voice]).format([voice], 320);
    voice.draw(this.context, this.stave);
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


