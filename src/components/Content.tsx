import Sort from './Sort';

interface IProps {
  title: string;
  sortedBy: IData;
  onFormChange: (name: string, value: IData) => void;
  children: React.ReactNode;
}

type IData = [string, string];

export default function Content({title, onFormChange, sortedBy, children}: IProps) {
  const handleSort = (value: IData) => {
    onFormChange('sortedBy', value);
  };

  return (
    <main className="col-md-9 ms-sm-auto px-md-4">
      <div className="d-flex justify-content-between pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{title}</h1>
        <Sort value={sortedBy} onChange={handleSort} />
      </div>
      {children}
    </main>
  )
}