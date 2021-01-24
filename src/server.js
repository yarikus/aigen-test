import {getId, getRandomDate, getRandomString, filterArray, compareBy} from './helper.js'

const AMOUNT = 100;

class Server {
  data = [];

  constructor(amount) {
    this.data = this._generateData(amount);
  }

  _generateData(amount) {
    let result = [];
    for (let i = 0; i < amount; i++) {
      result.push({
          id: getId(),
          name: getRandomString(),
          created: getRandomDate().toJSON(),
      });
    }
    return result;
  }

  filterBy({ id, created, name, sortedBy }) {
    let filters = {};
    const [start, end] = created;
    if (id) {
        filters['id'] = (item) => item == id;
    } else {
      filters['created'] = (item) => {
          return (new Date(item) >= start && new Date(item) <= end);
      };
      filters['name'] = (item) => item.indexOf(name) > -1;
    };

    const filtered = filterArray(this.data, filters);
    let sorted = filtered.sort(compareBy(sortedBy[0]));

    if (sortedBy[1] === 'desc') {
      sorted = sorted.reverse();
    }

    return Promise.resolve(sorted);
  }

  fetchAll() {
    return Promise.resolve(this.data);
  }
}

const instance = new Server(AMOUNT);
Object.freeze(instance);

export default instance;