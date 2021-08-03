import {v4 as uuid} from 'uuid'

export default class DateItem {

  /**
   * Creates a new instance of DateItem
   * @param {string} title
   * @param {string} date
   */
  constructor(title, date) {
    this.id = uuid();
    this.title = title;
    this.date = date;
    this.createdAt = new Date();
  }
}
