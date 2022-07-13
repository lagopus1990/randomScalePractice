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
        this.scales =  [
        /////////////////////////////////////////////// C ////////////////////////////////////////////////////////////////////////////////////////////
                  // C Ionian / Major
                  [[new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Dorian
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })], 
                  // C Phrygian 
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Lydian 
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  //C Myxolydian
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Aeolian / Natural Minor
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Locrian
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Harmonic minor
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Lydian flat 7
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Whole tone half tone
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Spanish / Phrygian dominant
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Pentatonic Major
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Blues Major
                   [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                   new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
                   new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                   new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
                   new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                   new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                   new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Pentatonic Minor
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                  // C Blues Minor
                  [new this.VF.StaveNote({ keys: ["c/4"], duration: "q"}),
                  new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                  new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
                  new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
                  new this.VF.StaveNote({ keys: ["c/5"], duration: "q" })],
                ],
/////////////////////////////////////////////// C# ////////////////////////////////////////////////////////////////////////////////////////////
               //C# Najor / Ionian
               [[new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Dorian
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Phrygian
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))], 
               // C# Lydian 
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("##")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Myxolydian
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Aeolian / Natural Minor
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))], 
               // C# Locrian
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
                // C# Harmonic Minor
                [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
                new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
                new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
                new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))], 
               // C# Lydian flat 7
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("##")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Whole tone half tone   
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("##")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],   
               // C# Spanish / Phrygian dominant
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],  
               // C# Pentatonic Major
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Blues Major
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Pentatonic Minor
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
               // C# Blues Minor
               [new this.VF.StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("#")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("#"))],
             ],
/////////////////////////////////////////////// Db ////////////////////////////////////////////////////////////////////////////////////////////
               // Db Najor / Ionian
               [[new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Dorian
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Phrygian
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Lydian
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Myxolydian
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Aeolian / Natural Minor
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Locrian
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Harmonic Minor
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Lydian flat 7
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Whole tone half tone
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],   
               // Db Spanish / Phrygian dominant
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("bb")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Pentatonic Major
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Blues Major
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Pentatonic Minor
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               // Db Blues Minor
               [new this.VF.StaveNote({ keys: ["d/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["f/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(new this.VF.Accidental("n")),
               new this.VF.StaveNote({ keys: ["a/4"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["c/5"], duration: "q" }).addModifier(new this.VF.Accidental("b")),
               new this.VF.StaveNote({ keys: ["d/5"], duration: "q" }).addModifier(new this.VF.Accidental("b"))],
               ]
            ]}

     getAllScales(){
        return this.scales;
     }

     getScale(keyIndex: number, scaleTypeIndex: number){
        if(keyIndex<=this.scales.length-1){
            if(scaleTypeIndex <= this.scales[keyIndex].length-1){
            return this.scales[keyIndex][scaleTypeIndex];}}
        return this.scales[0][0];
     }
  }