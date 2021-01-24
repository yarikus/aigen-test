import './Sidebar.css';

interface IProps {
  title: string; 
  children: React.ReactNode;
}

export default function Sidebar(props: IProps) {
  return (
    <aside className="Sidebar col-md-3 d-md-block bg-light collapse">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{props.title}</h1>
      </div>
      {props.children}
    </aside>
  );
}
