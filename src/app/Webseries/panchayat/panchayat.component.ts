import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-panchayat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panchayat.component.html',
  styleUrl: './panchayat.component.css'
})
export class PanchayatComponent {

  data =[
    {
      id: 1,
      name: "Punchayat Season 3",
      Director:	"Deepak Kumar Mishra",
      Genre:	"Comedy, Drama",
      image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj59raFzbrlVWlQlQT3hzEsYOE8Kf-t7-y2Ajb3wApl_3jef2JqA5QwT9aYszwO6pEAeya5f3AbQncNg1giur9U9dV_jwKX6jACTBCWgfJS6rWMFD5SWWOV9NenpoBajpwuVBPC2DikzyvNrPX6wDJ1boqfJPDUt3jsb_v0EUZXsmMqf2CmCKEbksUJid8/s16000-rw/panchayat%20s2.jpg',
      description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who through a time of finding his footing in the job market, experiences love and friendship for the first time.",
      url:'https://cloaking.link/panchayat3'

    },{
      id: 2,
      name: "Punchayat Season 2",
      Director:	"Deepak Kumar Mishra",
      Genre:	"Comedy, Drama",
      image:'https://th.bing.com/th?id=OSK.U2UwxG-t2zjiKVnKMsAtRcR-U0IXwxcmmlNWNftvltw&w=101&h=126&c=4&o=6&dpr=1.1&pid=SANGAM',
      description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who through a time of finding his footing in the job market, experiences love and friendship for the first time.",
      url:'https://cloaking.link/panchayat2'
    },
    {
      id: 3,
      name: "Punchayat Season 1",
      Director:	"Deepak Kumar Mishra",
      Genre:	"Comedy, Drama",
      image:'https://th.bing.com/th/id/OIP.Q3i-nJi5JZcbNxjcrH2rsQHaFj?w=214&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who through a time of finding his footing in the job market, experiences love and friendship for the first time.",
      url:'https://cloaking.link/panchayats1'

    }

  ]

}

