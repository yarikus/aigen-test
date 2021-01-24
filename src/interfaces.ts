export interface IDataItem {
  id: string;
  created: Date;
  name: string;
}

export interface ISearchRules {
  id: string;
  created: [Date, Date];
  name: string;
  sortedBy: [string, string];
}

export interface IFilters {
  [key: string]: (value: any) => boolean;
}