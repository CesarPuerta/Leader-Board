export class User {

  constructor(
    public id: number,
    public name: string,
    public color_name: string,
    public picture: string,
    public average_grade: number,
    public homework_1: number,
    public homework_2: number,
    public homework_3: number,
    public homework_4: number,
    public homework_5: number,
    public homeworks_missing: number,
    public homeworks_delivered: number,
    public last_updated: string
  ) { }

  static createObject(id, name, color_name, picture, average_grade,
    homework_1, homework_2, homework_3, homework_4, homework_5,
    homeworks_missing, homeworks_delivered, last_updated) {
    return new User(id, name, color_name, picture, average_grade,
      homework_1, homework_2, homework_3, homework_4, homework_5,
      homeworks_missing, homeworks_delivered, last_updated);
  }

}
