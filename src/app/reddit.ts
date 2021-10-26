export interface RedditItem {
	data: {
		children: [
			{
				data: {
					title: String,
					thumbnail: String,
					permalink: String
				}
			}
		]
	}
}

