import { Component, OnInit } from '@angular/core';
import { KursnaLista, PriceService, ZlatneKovanice, ZlatnePoluge } from './price-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  zlatneKovanices: ZlatneKovanice[] = [];
  zlatnePoluges: ZlatnePoluge[] = [];
  currencies: KursnaLista[] = [];

  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData(): void {
      this.priceService.getKovanice().subscribe(
      (kovaniceData: ZlatneKovanice[]) => {
        console.log('Kovanice Data received:', kovaniceData);
        this.zlatneKovanices = kovaniceData;
  
        // Fetch ZlatnePoluge after fetching Kovanice
        this.priceService.getPoluge().subscribe(
          (polugeData: ZlatnePoluge[]) => {
            console.log('Poluge Data received:', polugeData);
            this.zlatnePoluges = polugeData;
          },
          (polugeError) => {
            console.error('Error fetching Poluge data:', polugeError);
          }
        );
      },
      (kovaniceError) => {
        console.error('Error fetching Kovanice data:', kovaniceError);
      }
      
      
    );
  }

}