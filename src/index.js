import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDiRd5_9yRXWjFnMvS8KVH2MS7o8LSSUCM';

YTSearch({key: API_KEY, term: 'taco hemingway'}, function(data) {
				console.log(data);
});

const App = () => {
  return (
	  <div> 
	  	<SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
