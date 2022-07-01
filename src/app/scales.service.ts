import vexflow from 'vexflow';
import Vex from "vexflow";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ScalesService {
    VF = Vex.Flow;
    scales: any;
  
    constructor() {
        this.scales =  [[[new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],  
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                ]];
     }

     getAllScales(){
        return this.scales;
     }

     getScale(keyIndex: number, scaleTypeIndex: number){
        console.log("KeyIndex: " + keyIndex);
        console.log("scalesLength: " + this.scales.length);
        console.log("ScaleTypeIndex: " + scaleTypeIndex);
        console.log("scalesTypeIndex: " + this.scales[0].length);
        if(keyIndex<=this.scales.length-1){
            if(scaleTypeIndex <= this.scales[keyIndex].length-1){
            return this.scales[keyIndex][scaleTypeIndex];}}
        return this.scales[0][0];
     }

  }