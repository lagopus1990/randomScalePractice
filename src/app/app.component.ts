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
    {name: 'C', include: false},
    {name: 'C sharp / C#', include: false},
    {name: 'D Flat / Db', include: false},
    {name: 'D', include: false},
    {name: 'D sharp / D#', include: false},
    {name: 'E flat / Eb', include: false},
    {name: 'E', include: false},
    {name: 'F', include: true},
    {name: 'F sharp / F#', include: false},
    {name: 'G flat / Gb', include: false},
    {name: 'G', include: false},
    {name: 'G sharp / G#', include: false},
    {name: 'A flat / Ab', include: false},
    {name: 'A', include: false},
    {name: 'A sharp / A#', include: false},
    {name: 'B flat / Bb', include: false},
    {name: 'B', include: false},];

  allScaleTypes: Pair[] = [
    {name:'Ionian / Major', include: false},
    {name:'Dorian', include: true},
    {name:'Phrygian', include: false},
    {name:'Lydian', include: false},
    {name:'Myxolydian', include: false},
    {name:'Aeolean / natural minor', include: false},
    {name:'Locrian', include: false},
    {name:'Harmonic minor', include: false},
    {name:'Lydian flat7', include: false},
    {name:'Half tone whole tone', include: false}, 
    {name:'Spanish / Phrygian Dominant', include: false},
    {name:'Pentatonic Major', include: false},  
    {name:'Major Blues', include: false},  
    {name:'Pentatonic Minor', include: false},  
    {name:'Minor Blues', include: false},  
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
  index = 0;
  paused = false;
  staveSize = 520;
  showStaff = true;

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

        if(window.innerWidth < 540) this.staveSize = 340; 
        console.log(window.innerWidth);
        this.staff  = document.getElementById("vexflow-player");
        this.renderer = new this.VF.Renderer(this.staff, this.VF.Renderer.Backends.SVG);
        this.renderer.resize(540, 120);
        this.context = this.renderer.getContext();
        this.context.setFont("Arial", 9, "").setBackgroundFillStyle("#eed");
        this.stave = new this.VF.Stave(0, 5, this.staveSize);
        this.stave.addClef("treble");
        this.stave.setContext(this.context).draw(); 
        let keyIndex = this.allKeys.findIndex(item => item == this.key);  
        let scaleTypeIndex = this.allScaleTypes.findIndex(item => item == this.scaleType); 
        const notes = this.scalesService.getScale(keyIndex, scaleTypeIndex);

      
      this.voice = new this.VF.Voice({ num_beats: notes.length, beat_value: 4 });
      this.voice.addTickables(notes);

      new this.VF.Formatter().joinVoices([this.voice]).format([this.voice], this.staveSize - 50);
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
      this.redrawStaff();
      }, this.interval*1000);
  }
  
  toggleStaff(){
    this.showStaff = !this.showStaff;
  }

  redrawStaff(){
    this.voice.tickables.forEach((item: any) => {item.attrs.el.remove()});
    this.voice.tickables = [];
    
    let keyIndex = this.allKeys.findIndex(item => item == this.key);  
    let scaleTypeIndex = this.allScaleTypes.findIndex(item => item == this.scaleType);  
    const notes = this.scalesService.getScale(keyIndex, scaleTypeIndex);
    this.voice = new this.VF.Voice({ num_beats: notes.length, beat_value: 4 });
    this.voice.addTickables(notes);

    new this.VF.Formatter().joinVoices([this.voice]).format([this.voice], this.staveSize - 50);
    this.voice.draw(this.context, this.stave);
  }

  next(){
    this.key = this.generateRandomItem(this.allKeys, this.key);
    this.scaleType = this.generateRandomItem(this.allScaleTypes, this.scaleType);
    this.redrawStaff();
    if(!this.paused) this.restartInterval();
  }

  pause(){
    this.paused = true;
    clearInterval(this.intervalId);
  }

  start(){
    this.paused = false;
    this.restartInterval()
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


