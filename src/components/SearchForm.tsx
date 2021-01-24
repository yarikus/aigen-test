import {ISearchRules} from '../interfaces';
import DateRange from './DateRange';

type TDate = [Date, Date];

interface IProps extends ISearchRules {
  onFormChange: (name: string, value: TDate | string) => void;
}

function SearchForm({ id, created, name, onFormChange }: IProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        onFormChange(target.name, target.value);
    };

    const handleDateRange = (range: TDate) => {
        onFormChange('created', range);
    };

    return (
      <>
        <div className="form-floating mb-3">
          <input type="text" name="id" value={id} onChange={handleChange} className="form-control" id="documentId" />
          <label htmlFor="documentId">ID документа</label>
        </div>
        <div className="row g-2 mb-3">
          <DateRange value={created} onChange={handleDateRange} />
        </div>
        <div className="form-floating">
          <input name="name" value={name} onChange={handleChange} type="text" className="form-control" id="name" placeholder="Password" />
          <label htmlFor="name">Название</label>
        </div>
      </>
    );
}

export default SearchForm;