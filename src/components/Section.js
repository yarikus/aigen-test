import {useState} from 'react';

export default function Section({ id, name, created }) {
  const [isCollapsed, setCollapse] = useState(false);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button onClick={() => { setCollapse(prev => !prev) }} className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`} type="button">{name}</button>
      </h2>
      <div  className={`accordion-collapse collapse ${isCollapsed ? 'hide' : 'show'}`}>
        <div className="accordion-body">
          <ul>
            <li>ID: {id}</li>
            <li>Created: {new Date(created).toLocaleDateString()}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
