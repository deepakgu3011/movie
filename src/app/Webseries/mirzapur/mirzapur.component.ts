import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mirzapur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mirzapur.component.html',
  styleUrl: './mirzapur.component.css'
})
export class MirzapurComponent {
  data=[
    {
      id:1,
      name:'Mirzapur S1',
      Director:'Karan Anshuman and Gurmeet Singh',
      Genre:'Indian Hindi-language action crime thriller television series ',
      image:'https://th.bing.com/th?id=OIF.7RbOZWXxcscUCIL%2bQ9wrTQ&w=328&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      description:'Mirzapur is an Indian Hindi-language action crime thriller television series created for Amazon Prime Video, by Karan Anshuman, who wrote the script along with Puneet Krishna & Vineet Krishna. Anshuman directed the first season of the series, along with Gurmmeet Singh and Mihir Desai, the latter of whom directed the second season. The series is produced by Rithesh Sidhwani and Farhan Akhtar of Excel Entertainment. The story follows Akhandanand Tripathi (Pankaj Tripathi), also known as Kaleen Bhaiya, the mafia don and proverbial ruler of Mirzapur in the Purvanchal region of Uttar Pradesh. In the first season, the main cast features Pankaj Tripathi, Shweta Tripathi, Divyendu Sharma, Ali Fazal, Vikrant Massey, Shriya Pilgaonkar, Rasika Dugal, Harshita Gaur and Kulbhushan Kharbanda. ',
      url:'https://cloaking.link/MirzapurS1',
    },
    {
      id:2,
      name:'Mirzapur S2',
      Director:'Karan Anshuman and Gurmeet Singh',
      Genre:'Indian Hindi-language action crime thriller television series ',
      image:'https://th.bing.com/th/id/OIP.YXs_t0dBacV7-p_YUJ03bAHaFj?w=211&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      description:'Season 2 In Mirzapur, revenge runs darker than blood. There is one title, the King of Mirzapur, but many takers. Munna feels invincible after escaping from the wedding massacre. Guddu and Golu are nowhere to be found. Akhandanand’s ambitions soar as he eyes political power. The second season retains the principal cast from the first season, excluding Massey and Pilgaonkar, with new cast consisting of Vijay Varma, Isha Talwar, Lilliput, Anjum Sharma, Priyanshu Painyuli, Anangsha Biswas and Neha Sargam',
      url:'https://cloaking.link/MirzapurS2',
    },
    {
      id:3,
      name:'Mirzapur S3',
      Director:'Karan Anshuman and Gurmeet Singh',
      Genre:'Indian Hindi-language action crime thriller television series ',
      image:'https://th.bing.com/th/id/OIP.ZQ7MxmnoYdolsZnhOM6P8QHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      description:'Guddu survives the attack on himself and the failure weakens Madhuri’s position in public. Sharad approaches Madhuri about an alliance since they have a common enemy. Shatrugan Tyagi lives as his brother Bharat, but maintaining the facade is sometimes difficult for him. Kaleen Bhaiya finally regains consciousness and Shatrugan sets a trap for Golu and captures her but doesn’t tell anyone. Golu’s disappearance lights a fire in Guddu and he incites open violence against Sharad and the other bosses. Sharad tries to make a deal with Lala earlier, but Shabnam convinces her father to stick with Guddu.',
      url:'https://cloaking.link/MirzapurS3',
    }
  ]
}
