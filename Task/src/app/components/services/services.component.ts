import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services =[
    {
      logo: 'c1.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur venenatis est ut, tincidunt nibh',
    },
    {
      logo: 'c2.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur venenatis est ut, tincidunt nibh',
      
    },
    {
      logo: 'c3.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur venenatis est ut, tincidunt nibh',
    },
    {
      logo: 'c4.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur venenatis est ut, tincidunt nibh',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
