import React from 'react';

const VideoList = (props) => {
	return (
		<ul class Name = "col-md-4 list-group">
			{ props.videos.length }
		</ul>
	);
};

export default VideoList;
