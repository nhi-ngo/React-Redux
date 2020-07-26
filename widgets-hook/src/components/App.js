import React from 'react';
import itemsData from '../items';
import Accordion from './Accordion';

function App() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   setItems(itemsData);
  // }, []);

  return (
    <div>
      <h1>Widgets App</h1>
      <Accordion items={itemsData} />
    </div>
  );
}

export default App;
