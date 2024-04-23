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
    if(nomeT == "Neoclassicismo" ){
      this.name = "Neoclassicismo";
    }
    if(nomeT == "Romanticismo" ){
      this.name = "Romanticismo";
    }
    if(nomeT == "Naturalismo" ){
      this.name = "Naturalismo";
    }
    if(nomeT == "Umanesimo Nordico" ){
      this.name = "Umanesimo Nordico";
    }
    if(nomeT == "Leonardismo" ){
      this.name = "Leonardismo";
    }
    if(nomeT == "Gotico" ){
      this.name = "Gotico";
    }
    if(nomeT == "Cistercense" ){
      this.name = "Cistercense";
    }
  
  }
  mostre=[
    {NomeMostra:"Neoclassicismo",Epoca:"1700",Protagonisti:"Jacques-Louis David",immagine:"https://www.artesplorando.it/wp-content/uploads/2019/09/Grafiche-blog.jpg"},
    {NomeMostra:"Romanticismo",Epoca:"1800",Protagonisti:"Modigliani", immagine:"https://cdn.skuola.net/news_foto/2016/romanticismo.jpg"},
    {NomeMostra:"Naturalismo",Epoca:"1500",Protagonisti:"Caravaggio, Albrecht Dürer",immagine:"https://i.ytimg.com/vi/O-wrqhwGU20/maxresdefault.jpg"},
    {NomeMostra:"Umanesimo Nordico",Epoca:"1500",Protagonisti:"Erasmo da Rotterdam", immagine:"https://cdn.skuola.net/w1200h687/news_foto/2018/umanesimo-rinascimento-periodo.jpg"},
    {NomeMostra:"Leonardismo",Epoca:"1500",Protagonisti:"Leonardo da Vinci",immagine:"https://cordis.europa.eu/docs/news/images/2019-06/131364.jpg"},
    {NomeMostra:"Gotico",Epoca:"1000/1200",Protagonisti:"Pierre de Montreuil, Giotto",immagine:"https://www.iconatoscana.it/wp-content/uploads/elementor/thumbs/image00027-pfj415tt9geckvkqz9st21ggh5ebmz5rwhj5rnihms.jpeg"},
    {NomeMostra:"Cistercense",Epoca:"1100",Protagonisti:"San Bernardo di Chiaravalle",immagine:"https://cdn.studenti.stbm.it/images/2020/02/07/chiara-e-francesco-in-un-affresco-di-assisi_600x400.jpeg"},
  ]
}