import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDiRd5_9yRXWjFnMvS8KVH2MS7o8LSSUCM';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'taco hemingway'}, (videos) => {
			this.setState({ videos });
		});

		console.log(this.state);

	}
	
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos = { this.state.videos } />
			</div>
		);
	}

}

ReactDOM.render(<App />, document.querySelector('.container'));


export default App;
