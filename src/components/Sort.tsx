import {useState, useEffect} from 'react';

interface IProps {
  value: IData; 
  onChange: (value: IData) => void;
}

type IData = [string, string];

export default function Sort({ value, onChange }: IProps) {
    const [state, setState] = useState<IData>(value);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setState((prev) => {
        let newState: IData = [ ...prev ];
        if (event.target.name === 'sort') {
            newState[0] = event.target.value;
        } else if (event.target.name === 'order') {
            newState[1] = event.target.value;
        }
        return newState;
      });
    };

    useEffect(() => {
      onChange(state);
    }, [state]);

    return (
      <div className="row flex-nowrap g-2">
        <div className="col-auto">
          <select className="form-select" name="sort" value={state[0]} onChange={handleChange}>
            <option value="name">Название</option>
            <option value="created">Создание</option>
          </select>
        </div>
        <div className="col-auto">
          <select className="form-select" name="order" value={state[1]} onChange={handleChange}>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </div>
      </div>
    );
}
