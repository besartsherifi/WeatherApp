import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.models';
import { EsportsService } from './services/esports.service';
import { EsportsData } from './models/esports.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData;
  searchQuery: string = '';
  esportsData?: EsportsData;
  constructor(
    private weatherService: WeatherService,
    private esportsService: EsportsService
  ) {}

  ngOnInit(): void {
    this.getWeatherData('Skopje');
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }
  getLiveMatches(startDate: string, endDate: string, matchEvent: string): void {
    this.esportsService
      .getLiveMatches(startDate, endDate, matchEvent)
      .subscribe({
        next: (result) => {
          console.log('Esports', result);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
  }
  onSearch(): void {
    if (this.searchQuery.trim() !== '') {
      this.getWeatherData(this.searchQuery);
    }
  }
}
