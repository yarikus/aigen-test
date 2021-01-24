import {useState, useEffect, useRef} from 'react';

type TDate = [Date, Date];

interface IProps {
  value: TDate; 
  onChange: (value: TDate) => void;
}

export default function DateRange({value, onChange}: IProps) {
    const [start, end] = value;

    const [range, setRange] = useState({
      from: new Date(start).toISOString().substring(0, 10),
      to: new Date(end).toISOString().substring(0, 10),
    });

    const fromRef = useRef(null);
    const toRef = useRef(null);

    useEffect(() => {
      onChange([ new Date(range.from), new Date(range.to) ]);
    }, [range]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      setRange(prevState => {
        return {
          ...prevState,
          [name]: value,
        }
      });
    };

    return (
      <>
        <div className="col-md">
          <div className="form-floating">
            <input ref={fromRef} name="from" value={range.from} onChange={handleChange} type="date" className="form-control" id="from" />
            <label htmlFor="from">От</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <input ref={toRef} name="to" value={range.to} onChange={handleChange} type="date" className="form-control" id="to" />
            <label htmlFor="to">До</label>
          </div>
        </div>
      </>
    );
}