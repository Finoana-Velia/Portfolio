import { NgClass, NgForOf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SkillsComponent } from '../skills/skills.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit{
  
  @ViewChild('canvas',{static : false})
  canvasRef! : ElementRef<HTMLCanvasElement>;

  @ViewChild('banner',{static : false})
  bannerRef! : ElementRef;

  private banner! : HTMLDivElement;
  private canvas! : HTMLCanvasElement;

  private ctx! : CanvasRenderingContext2D | null;
  dpr = window.devicePixelRatio || 1;

  dots : any[] = [];

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.banner = this.bannerRef.nativeElement;
    
    const width = window.innerWidth;
    const height = this.banner.scrollHeight;

    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    this.ctx = this.canvas.getContext('2d');
    this.ctx?.scale(this.dpr, this.dpr);

    const arrayColors = [
      '#ec4889','#f43f5e','#a855f7','#d946ef','#6366f1',
      '#8b5cf6','#0ea5e9','#3b82f6','#14b8a6','#06b6d4',
      '#22c55e','#10b981','#eab308','#94cc16','#f97316',
      '#f59e0b','#78716c','#ef4444','#71717a','#737373',
      '#65748b','#6b7280']
    for(let index = 0; index < 300 ; index ++) {
      this.dots.push({
        x : Math.floor(Math.random() * this.canvas.width),
        y : Math.floor(Math.random() * this.canvas.height),
        size : Math.random() * 3 + 5,
        color : arrayColors[Math.floor(Math.random() * 22)]
      });
    }
    this.drawPoints();
  }

  drawPoints() {
    this.dots.forEach(dot => {
    if(this.ctx) {
      this.ctx.beginPath();
      this.ctx.arc(dot.x,dot.y,dot.size,0,2*Math.PI),
      this.ctx.fillStyle = dot.color,
      this.ctx.fill();
      // this.ctx.closePath();
    }
    });
  }

  onMouseEvent(event : MouseEvent) {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPoints();
    //const rect = this.banner.getBoundingClientRect();
    let mouse = {
      x : event.pageX,
      y : event.pageY
    }

    this.dots.forEach(dot => {
      let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
      if(distance < 300 && this.ctx) {
        this.ctx.strokeStyle = dot.color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(dot.x, dot.y);
        this.ctx.lineTo(mouse.x,mouse.y);
        this.ctx.stroke();
      }
    })
    
  }

  onMouseOut() {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPoints();
  }
  

}
