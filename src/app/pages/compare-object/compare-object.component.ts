import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-object',
  templateUrl: './compare-object.component.html',
  styleUrls: ['./compare-object.component.scss'],
})
export class CompareObjectComponent implements OnInit {
  code = `/**
  *
  * @param object1 The object1 to be compared
  * @param object2 The object2 to be compared against object1
  * @returns returns true if the objects are deeply equal, false otherwise
  */
 export function deepCompare(object1: any, object2: any): boolean {
   // If both objects are null or undefined and are exactly the same, return true.
   if (
     (object1 === null && object1 === undefined) ||
     object2 === null ||
     object2 === undefined
   ) {
     return true;
   }
 
   //check the type of the objects , if they are not the same type return false
   if (object1.constructor !== object2.constructor) {
     return false;
   }
 
   //Check the values of each objects are the same or refers to the same memory location and return true
   if (object1 === object2 || object1.valueOf() === object2.valueOf()) {
     return true;
   }
 
   //check if the object one is an array , then the object two must be an array and should have the same length
   if (Array.isArray(object1) && object1.length !== object2.length) {
     return false;
   }
 
   if (object1 instanceof Date) {
     return false;
   }
 
   //check if the object1 is a object , if not return false
   if (!(object1 instanceof Object)) {
     return false;
   }
   //check if the object2 is a object , if not return false
   if (!(object2 instanceof Object)) {
     return false;
   }
 
   //a recursive process to cross check the properties of the two objects and compare their values, if they are not the same return false
   let object1Keys = Object.keys(object1);
   return (
     Object.keys(object2).every((i) => {
       return object1Keys.indexOf(i) !== -1;
     }) &&
     object1Keys.every((i) => {
       return deepCompare(object1[i], object2[i]);
     })
   );
 }
 `;

  constructor() {}

  ngOnInit(): void {}
}
