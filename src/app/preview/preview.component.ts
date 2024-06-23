import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit {
image =[
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  'image10.jpg',
  'image11.jpg',
  'image12.jpg',
  'image13.jpg',
  'image14.jpg',
  'image15.jpg',
  'image16.jpg',
  'image17.jpg',
]
i=0
next(){
  this.i++
  if(this.i>this.image.length-1){
    this.i=0
  }
  console.log(this.i)
}
previous(){
 if(this.i==0){
  this.i=this.image.length-1
 }
 else {
  this.i--
 }
  console.log(this.i)

}
ngOnInit():void {

  }
}
