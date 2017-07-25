import { User } from './users.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usersList = [
      {
        'id': 1,
        'name': 'Cesar Puerta',
        'picture': 'https://randomuser.me/api/portraits/med/men/83.jpg',
        'average_grade': 0,
        'homeworks_delivered': 5,
        'homeworks_missing': 0,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 3,
        'name': 'Robert Galarga',
        'picture': 'https://randomuser.me/api/portraits/med/men/85.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 4,
        'name': 'aaaaaaa',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 5,
        'name': 'bbbb',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Hitler De Jesús',
        'picture': 'https://randomuser.me/api/portraits/med/men/84.jpg',
        'average_grade': 5,
        'homeworks_delivered': 3,
        'homeworks_missing': 2,
        'last_updated': '07/24/2017'
      }
    ];
    return {usersList};
  }
}
