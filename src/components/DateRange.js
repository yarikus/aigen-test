import {useState, useEffect, useRef} from 'react';

export default function DateRange({value, onChange}) {
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

    function handleChange(event) {
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
        <div class="col-md">
          <div class="form-floating">
            <input ref={fromRef} name="from" value={range.from} onChange={handleChange} type="date" class="form-control" id="from" />
            <label for="from">От</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input ref={toRef} name="to" value={range.to} onChange={handleChange} type="date" class="form-control" id="to" />
            <label for="to">До</label>
          </div>
        </div>
      </>
    );
}