import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies = [
    { id: 1,link:'panchayat', title: 'Panchayat', Description: 'Panchayat Season 3 keeps telling the nice story about Abhishek Tripathi, played by Jitendra Kumar. Hes a guy who works in a small village office called a panchayat. The show also has Neena Gupta, Raghubir Yadav, and Chandan Roy in it. Deepak Kumar Mishra directs it. People like the show because its simple and interesting.', Image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmoOB3UReqRGNxpJheYY_NpqvJyN3y47WFiOQGpPd8CMKCraNlWEmblstsgjVJ1nwnoxhc_j68ZH3pLnhZHJ22d3-SBQJ-uhgsYQ5MRn4k0anvXCP3xOEhGYbt_WUmt0CPdKrfjkBnPTtYaRbJHjAD7No7Vr8ivlDeuyGMPj8dnW-YKt2wrCLm3Jqt_Xk/s16000-rw/s3%20of%20panchayat.webp' },
    { id: 2,link:'mirzapur', title: 'Mirzapur (All Episodes) 2024 Web Series', Description: 'Mirzapur Season 3 continues the thrilling story of power, crime, and revenge in central India. Directed by Gurmmeet Singh and Anand Iyer, the series is produced by Excel Entertainment with executive producers Ritesh Sidhwani, Farhan Akhtar, Kassim Jagmagia, and Gurmmeet Singh. The returning cast includes Pankaj Tripathi as Tripathi, Ali as Guddu Pandit, Shweta as Golu.', Image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrJCzkC7LGxKHXCrHnQSXoJoqCnODN7cIxy6sB6iyEKvvz_OwYTaAN6gceAchR1014Cc4sBnAsoUAQqSLQiIRQZSzW0Jr1NbGmtnE7l9qBgTBGVS5oA3xZPES7BYPJwfErkAlOKCd9VTG3JRmMzcQNyE0PBSrPzHctqncdJfGVKLG94y-HTbIHILl2pDI/w600-h300-p-k-no-nu/mirzapur%20season%203%20(7).webp' },
    { id: 3,link:'kill', title: 'Kill Bollywood Movie', Description: 'Kill is a new action-thriller Bollywood movie released on 5 July 2024. It stars Raghav Juyal, Tanya Maniktala, and Lakshya Lalwani in leading roles. Produced by Karan Johar, Hiroo Yash Johar, Apoorva Mehta, Guneet Monga, and Achin Jain, the film is a joint effort between Dharma Productions and Sikhya Entertainment.', Image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMrlbWaWmBdqi6cjfJeQ6hz_0kqFndRiv3C-wV0Ob5p2aAiBlCIR90aHPSarGpYD6yAbcFiTVa5srwCJH_2LB-dZR6_i85GsKyiPFD0roMulIaYjTKd2pkrQm8qYoSl-eF6xVrOBPqoq1p7zVd0qtMn4PLD4nP_haZr49h7Ylsk9tpOna1gq8eeRK-VDg/s16000-rw/Kill%20movie%20(3).webp' },]
}
