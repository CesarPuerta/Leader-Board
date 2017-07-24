export class User {

    constructor(
        public id: number,
        public name: string,
        public picture: string,
        public average_grade: number,
        public homeworks_delivered: number,
        public homeworks_missing: number,
        public last_updated: string
    ) {  }

    static createObject(id, name, picture, average_grade, homeworks_delivered, homeworks_missing, last_updated) {
        return new User(id, name, picture, average_grade, homeworks_delivered, homeworks_missing, last_updated);
    }

    getAverage() {
        return (this.homeworks_delivered - this.homeworks_missing);
    }
}
