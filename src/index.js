import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDiRd5_9yRXWjFnMvS8KVH2MS7o8LSSUCM';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
		  videos: [],
      selectedVideo: null
		};

    this.videoSearch('taco hemingway')
	}

	videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

	render() {
	  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


		return (
			<div>
				<SearchBar onSearchTermChange={ videoSearch } />
				<VideoDetail video = { this.state.selectedVideo   }/>
				<VideoList
          onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
          videos = { this.state.videos } />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));

export default App;
