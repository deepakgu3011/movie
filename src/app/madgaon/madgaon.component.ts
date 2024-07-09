import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-madgaon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './madgaon.component.html',
  styleUrl: './madgaon.component.css'
})
export class MadgaonComponent {
 data=[ {
    id:1,
    name:'Madgaon express 1080p',
    Director:'Kunal Khemu',
    image:'https://th.bing.com/th/id/OIP.13wE7QyebM9dA-RbuQysqwAAAA?pid=ImgDet&w=206&h=115&c=7&dpr=1.1',
    description:'Madgaon Express has been setting the tone right for a good comedy. The movie is getting a lot of love from the fans all over for its fantastic comedy along with great performances and also for some good storytelling. The film that has great names like Nora Fatehi, Divyendu Sharma, Pratik Gandhi, Avinash Tiwary, Upendra Limaye, Chhaya Kadam, Remo D`Souza, Anupam Hinge, and Nikolai Musalkov is directed by Kunal Kemmu and it is his directorial debut. It has been 12 days since the movie has hit the big screens and today let us see the collections made by the movie',
    url:'https://cloaking.link/Madgaon',
  }
]
}
