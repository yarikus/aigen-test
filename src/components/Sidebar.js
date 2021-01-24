import './Sidebar.css';

export default function Sidebar(props) {
  return (
    <aside className="Sidebar col-md-3 d-md-block bg-light collapse">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">{props.title}</h1>
      </div>
      {props.children}
    </aside>
  );
}
