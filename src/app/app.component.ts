import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 2',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 3',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 4',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 5',
      url: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 6',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 7',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 2',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 3',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 4',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 5',
      url: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 6',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 7',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 2',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 3',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 4',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 5',
      url: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 6',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 7',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 2',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 3',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 4',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 5',
      url: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 6',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the beach number 7',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
  ]
}
