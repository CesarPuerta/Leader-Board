import { User } from './users.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usersList = [
      {
        'id': 1,
        'name': 'Cesar Puerta',
        'color_name': 'green',
        'picture': 'https://randomuser.me/api/portraits/med/men/83.jpg',
        'average_grade': 20,
        'homework_1': 100,
        'homework_2': 90,
        'homework_3': 80,
        'homework_4': 40,
        'homework_5': 0,
        'homeworks_missing': 0,
        'homeworks_delivered': 0,
        'last_updated': '07/24/2017'
      },
      {
        'id': 2,
        'name': 'Andres Restrepo',
        'color_name': 'green',
        'picture': 'https://randomuser.me/api/portraits/med/men/82.jpg',
        'average_grade': 20,
        'homework_1': 100,
        'homework_2': 90,
        'homework_3': 80,
        'homework_4': 70,
        'homework_5': 60,
        'homeworks_missing': 0,
        'homeworks_delivered': 0,
        'last_updated': '07/24/2017'
      },
      {
        'id': 3,
        'name': 'Juan Sepulveda',
        'color_name': 'green',
        'picture': 'https://randomuser.me/api/portraits/med/men/81.jpg',
        'average_grade': 20,
        'homework_1': 100,
        'homework_2': 90,
        'homework_3': 80,
        'homework_4': 70,
        'homework_5': 60,
        'homeworks_missing': 0,
        'homeworks_delivered': 0,
        'last_updated': '07/24/2017'
      }
    ];
    return { usersList };
  }
}
