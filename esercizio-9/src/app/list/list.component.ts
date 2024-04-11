import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  name = "inizio";
  clickBottone(link: string){
    window.open(link);
    
  }

  setBtn(nomeT: string){
    if(nomeT == "Marte" ){
      this.name = "Marte";
    }
    if(nomeT == "Giove" ){
      this.name = "Giove";
    }
    if(nomeT == "Nettuno" ){
      this.name = "Nettuno";
    }
    if(nomeT == "Urano" ){
      this.name = "Urano";
    }
    if(nomeT == "Venere" ){
      this.name = "Venere";
    }
  
  }
  pianeti=[
    {destinazione:"Marte",appartenenza:"Via Lattea",durata:"0,000022 anni luce", pianetadipartenza:"Terra",DataPartenza:"11 agosto",arrivo:"30 agosto",costo:"75000 euri",immagine:"https://media-assets.wired.it/photos/6489cc666b70369c47e7f8ac/16:9/w_2560%2Cc_limit/GettyImages-1394287943.jpg"},
    {destinazione:"Giove",appartenenza:"Via Lattea",durata:"0,000045 anni luce", pianetadipartenza:"Terra",DataPartenza:"9 maggio",arrivo:"3 giugno",costo:"100000 euri",immagine:"https://notizie.tiscali.it/export/sites/notizie/.galleries/19/jupiter_big.jpg_1759381997.jpg"},
    {destinazione:"Nettuno",appartenenza:"Via Lattea",durata:"0,000279 anni luce", pianetadipartenza:"Terra",DataPartenza:"25 ottobre",arrivo:"30 novembre",costo:"4000000 euri",immagine:"https://images.everyeye.it/img-notizie/il-pianeta-nettuno-vivendo-cambiamento-drammatico-inspiegabile-v3-581108.jpg"},
    {destinazione:"Urano",appartenenza:"Via Lattea",durata:"0,000178 anni luce", pianetadipartenza:"Terra",DataPartenza:"18 gennaio",arrivo:"12 febbraio",costo:"250000 euri",immagine:"https://services.meteored.com/img/article/urano-el-planeta-mas-frio-del-sistema-solar-quereis-saber-mas-1678868732087_768.jpg"},
    {destinazione:"Venere",appartenenza:"Via Lattea",durata:"0,000013 anni luce", pianetadipartenza:"Terra",DataPartenza:"22 luglio",arrivo:"20 luglio",costo:"50000 euri",immagine:"https://www.futuroprossimo.it/wp-content/uploads/2020/09/una-missione-esplorare-venere-realta-futuro-v3-412514-1280x720-1.jpg"},
    
  ]
}