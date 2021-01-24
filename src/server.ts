import {getId, getRandomDate, getRandomString, filterArray, compareBy} from './helper'
import {ISearchRules, IDataItem, IFilters} from './interfaces';

const AMOUNT = 100;

class Server {
  data: IDataItem[] = [];

  constructor(amount: number) {
    this.data = this._generateData(amount);
  }

  _generateData(amount: number): IDataItem[] {
    let result: IDataItem[] = [];
    for (let i = 0; i < amount; i++) {
      result.push({
          id: getId(),
          created: getRandomDate(),
          name: getRandomString(),
      });
    }
    return result;
  }

  filterBy({ id, created, name, sortedBy }: ISearchRules) {
    let filters: IFilters = {};
    const [start, end]: [Date, Date] = created;
    if (id) {
        filters['id'] = (item: string) => item === id;
    } else {
      filters['created'] = (item: string) => {
          return (new Date(item) >= start && new Date(item) <= end);
      };
      filters['name'] = (item: string) => item.indexOf(name) > -1;
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