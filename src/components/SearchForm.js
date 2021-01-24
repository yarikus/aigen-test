import DateRange from './DateRange';

function SearchForm({ id, created, name, sortedBy, onFormChange }) {
    const handleChange = (event) => {
        const target = event.target;
        onFormChange(target.name, target.value);
    };

    const handleDateRange = (range) => {
        onFormChange('created', range);
    };

    return (
      <>
        <div className="form-floating mb-3">
          <input type="text" name="id" value={id} onChange={handleChange} class="form-control" id="documentId" />
          <label for="documentId">ID документа</label>
        </div>
        <div class="row g-2 mb-3">
          <DateRange value={created} onChange={handleDateRange} />
        </div>
        <div className="form-floating">
          <input name="name" value={name} onChange={handleChange} type="text" class="form-control" id="name" placeholder="Password" />
          <label for="name">Название</label>
        </div>
      </>
    );
}

export default SearchForm;