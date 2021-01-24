import Sort from './Sort';

export default function Content(props) {
  const handleSort = (value) => {
    console.log(value);
    props.onFormChange('sortedBy', value);
  };

  return (
    <main className="col-md-9 ms-sm-auto px-md-4">
      <div class="d-flex justify-content-between pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">{props.title}</h1>
        <Sort value={props.sortedBy} onChange={handleSort} />
      </div>
      {props.children}
    </main>
  )
}