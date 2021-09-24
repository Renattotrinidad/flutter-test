import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  public ContenedorPrincipal: boolean;
  public Contenedora2: boolean;
  public Contenedorb2: boolean;
  public Contenedorc2: boolean;
  public Contenedord2: boolean;
  public Contenedore2: boolean;
  public Contenedorf2: boolean;
  public Contenedora4: boolean; 
  public Contenedorb4: boolean;
 public  Contenedorc4: boolean;
 public Contenedord4: boolean;

  constructor() { }

  ngOnInit(): void {
    this.ContenedorPrincipal = true;
    this.Contenedora2= false;
    this.Contenedorb2 = false;
    this.Contenedorc2 = false;
    this.Contenedord2 = false;
    this.Contenedore2 = false;
    this.Contenedorf2 = false;
    this.Contenedora4 = false;
    this.Contenedorb4 = false;
    this.Contenedorc4 = false;
    this.Contenedord4 = false;
  }

  
   
  touch(type){
    // console.log(type);
 
     if (type == 1){
       this.Contenedora2= true;
        this.Contenedorb2 = false;
        this.Contenedorc2 = false;
        this.Contenedord2 = false;
        this.Contenedore2 = false;
        this.Contenedorf2 = false;
        this.Contenedora4 = false;
        this.Contenedorb4 = false;
        this.Contenedorc4 = false;
        this.Contenedord4 = false;
     
   // this.holamundo= false;
     }
     if (type == 2){
       this.Contenedora2= false;
       this.Contenedorb2 = true;
       this.Contenedorc2 = false;
       this.Contenedord2 = false;
       this.Contenedore2 = false;
       this.Contenedorf2 = false;
       this.Contenedora4 = false;
        this.Contenedorb4 = false;
        this.Contenedorc4 = false;
        this.Contenedord4 = false;
     
     }
   
   if (type == 3 ){
     this.Contenedora2= false;
     this.Contenedorb2 = false;
     this.Contenedorc2 = true;
     this.Contenedord2 = false;
     this.Contenedore2 = false;
     this.Contenedorf2 = false;
     this.Contenedora4 = false;
        this.Contenedorb4 = false;
        this.Contenedorc4 = false;
        this.Contenedord4 = false;
     
   
 }
 if (type == 4){
   this.Contenedora2= false;
   this.Contenedorb2 = false;
   this.Contenedorc2 = false;
   this.Contenedord2 = true;
   this.Contenedore2 = false;
   this.Contenedorf2 = false;
   this.Contenedora4 = false;
        this.Contenedorb4 = false;
        this.Contenedorc4 = false;
        this.Contenedord4 = false;
     
 }
 
 if (type == 5){
   this.Contenedora2= false;
   this.Contenedorb2 = false;
   this.Contenedorc2 = false;
   this.Contenedord2 = false;
   this.Contenedore2 = true;
   this.Contenedorf2 = false;
   this.Contenedora4 = false;
        this.Contenedorb4 = false;
        this.Contenedorc4 = false;
        this.Contenedord4 = false;
     
 
 }
 
     if (type == 10){
      
       this.Contenedora2= false;
       this.Contenedorb2 = false;
       this.Contenedorc2 = false;
       this.Contenedord2 = false;
       this.Contenedore2 = false;
       this.Contenedorf2 = true;
       this.Contenedora4 = false;
        this.Contenedorb4 = false;
        this.Contenedorc4 = false;
        this.Contenedord4 = false;
     
  }
  
  if (type == 6){
      
   this.Contenedora2= false;
   this.Contenedorb2 = false;
   this.Contenedorc2 = false;
   this.Contenedord2 = false;
   this.Contenedore2 = false;
   this.Contenedorf2 = false;
   this.Contenedora4 = true;
    this.Contenedorb4 = false;
    this.Contenedorc4 = false;
    this.Contenedord4 = false;
 
 }
 
 if (type == 7){
      
   this.Contenedora2= false;
   this.Contenedorb2 = false;
   this.Contenedorc2 = false;
   this.Contenedord2 = false;
   this.Contenedore2 = false;
   this.Contenedorf2 = false;
   this.Contenedora4 = false;
    this.Contenedorb4 = true;
    this.Contenedorc4 = false;
    this.Contenedord4 = false;
 
 }
 
 if (type == 8){
      
   this.Contenedora2= false;
   this.Contenedorb2 = false;
   this.Contenedorc2 = false;
   this.Contenedord2 = false;
   this.Contenedore2 = false;
   this.Contenedorf2 = false;
   this.Contenedora4 = false;
    this.Contenedorb4 = false;
    this.Contenedorc4 = true;
    this.Contenedord4 = false;
 
 }
 
 if (type == 9){
      
   this.Contenedora2= false;
   this.Contenedorb2 = false;
   this.Contenedorc2 = false;
   this.Contenedord2 = false;
   this.Contenedore2 = false;
   this.Contenedorf2 = false;
   this.Contenedora4 = false;
    this.Contenedorb4 = false;
    this.Contenedorc4 = false;
    this.Contenedord4 = true;
 
 }
    }
   
}
