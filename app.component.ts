import { Component, ViewChild, ElementRef } from '@angular/core';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('channelName') channelName!: ElementRef;

  channels:any

  
  constructor(private youtube:YoutubeService){}

// display on homepage
  ngOnInit(){
    this.youtube.getChannels("asmr").subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })
}

// request data from youtube
getData(){
  var channelName = this.channelName.nativeElement.value

  this.youtube.getChannels(channelName).subscribe((data) => {
    console.log(data)
    this.channels = data.items
  })

}

}
