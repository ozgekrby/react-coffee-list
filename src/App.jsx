import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AllProducts from './components/AllProducts';
import AvailableNow from './components/AvailableNow';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterData,setFilterData]=useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      )
      .then((response) => {
        console.log(response.data)
        const filter=response.data.filter((item)=>item.available===true)
        setFilterData(filter);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <h1>Yükleniyor...</h1>;
  if (error) return <h1>Hata: {error.message}</h1>;

  return (
  <div>
      <Header />
      <Switch>
        <Route path="/all-products">
          <AllProducts data={data} />
        </Route>
        <Route path="/available-now">
          <AvailableNow filterData={filterData} />
        </Route>
        <Route path="/" exact>
          <AllProducts data={data} />
        </Route>
      </Switch>
      </div>
  );
}

export default App;
