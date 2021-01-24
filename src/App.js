import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import SearchForm from './components/SearchForm';
import Section from './components/Section';

import {useState, useEffect, useCallback} from 'react';
import API from './server.js';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [searchRules, setSearchRules] = useState({
    id: '',
    created: [new Date(2017, 1), new Date(2021, 12)],
    name: '',
    sortedBy: ['name', 'desc'],
  });

  useEffect(() => {
    API.fetchAll()
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  useEffect(() => {
    API.filterBy(searchRules)
      .then((filtered) => {
        setItems(filtered);
      });
  }, [searchRules]);

  const handleSearchFormChange = useCallback((name, value) => {
    setSearchRules((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }, [searchRules]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="App">
        <Header title="Поиск документов"/>
        
        <div className="container-fluid">
          <div className="row">
            <Sidebar title="Поиск">
              <SearchForm {...searchRules} onFormChange={handleSearchFormChange} />
            </Sidebar>

            <Content title="Документы" {...searchRules} onFormChange={handleSearchFormChange}>
              <div class="accordion accordion-flush">
                {items.map(item => (
                  <Section key={item.id} {...item} />
                ))}
              </div>
            </Content>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
