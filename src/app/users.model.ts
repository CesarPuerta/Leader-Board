export class User {

  constructor(
    public id: number,
    public name: string,
    public picture: string,
    public average_grade: number,
    public homework_1: number,
    public homework_2: number,
    public homework_3: number,
    public homework_4: number,
    public homework_5: number,
    public homeworks_missing: number,
    public last_updated: string
  ) { }

  static createObject(id, name, picture, average_grade,
    homework_1, homework_2, homework_3, homework_4, homework_5,
    homeworks_missing, last_updated) {
    return new User(id, name, picture, average_grade,
      homework_1, homework_2, homework_3, homework_4, homework_5,
      homeworks_missing, last_updated);
  }

  getAverage() {
    return ((this.homework_1 + this.homework_2 + this.homework_3 + this.homework_4 + this.homework_5) / 5);
  }
}
