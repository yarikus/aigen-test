
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import SearchForm from './components/SearchForm';
import Section from './components/Section';

import {useState, useEffect} from 'react';
import API from './server';

import {IDataItem, ISearchRules} from './interfaces';

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<IDataItem[]>([]);

  const [searchRules, setSearchRules] = useState<ISearchRules>({
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
        }
      )
  }, []);

  useEffect(() => {
    API.filterBy(searchRules)
      .then((filtered) => {
        setItems(filtered);
      });
  }, [searchRules]);

  const handleSearchFormChange = (name: string, value: any) => {
    setSearchRules((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };

  if (!isLoaded) {
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
              <div className="accordion accordion-flush">
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
