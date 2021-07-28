// hard coded dummy data, just for the better visuallization.
export const initialPostState = [
	{
		id: 1,
		author: "hoby",
		email: "hobyfrezk@gmail.com",
		text: "This is a short post example.",
	},
	{
		id: 2,
		author: "mia",
		email: "mia@gmail.com",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
	},
	{
		id: 3,
		author: "luigi",
		email: "luigi@gmail.com",
		text: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, allamcorper vel, tincidunt sed, euismod in, nibh.",
	},
	{
		id: 4,
		author: "Finnigan",
		email: "finnigan@gmail.com",
		text: "Mauris et tempus leo, quis posuere nulla. Vestibulum ultricies odio enim, id accumsan libero ullamcorper sed. Pellentesque facilisis mattis dui, id consequat libero accumsan et. Donec egestas pretium blandit. Suspendisse nulla risus, posuere ac erat non, iaculis mollis nisl. Curabitur porttitor dictum dolor, nec lobortis nunc. Nulla nunc magna, sollicitudin sit amet lectus sed, varius elementum lorem. Proin in dolor at mauris mattis tempus. Vestibulum dictum faucibus orci eu malesuada.",
	},
	{
		id: 5,
		author: "Ariel",
		email: "ariel@gmail.com",
		text: "Praesent rhoncus sem lorem, sit amet dapibus turpis condimentum et. Morbi commodo metus at nunc dictum, vitae pharetra odio ultrices. Vivamus eu turpis est. Mauris a molestie dolor. Donec egestas varius consectetur. Aenean sit amet urna ac sapien facilisis fringilla. Quisque vehicula elementum diam, sodales tempor magna venenatis vitae. Nulla mollis sem magna, in faucibus ligula tincidunt at. Aliquam tempor eros porttitor quam aliquet ornare. Quisque orci diam, eleifend sit amet enim commodo, tincidunt laoreet orci. Nulla a risus lectus.",
	},
	{
		id: 6,
		author: "luigi",
		email: "luigi@gmail.com",
		text: "Vivamus eu turpis est. Mauris a molestie dolor. Donec egestas varius consectetur. Aenean sit amet urna ac sapien facilisis fringilla. Quisque vehicula elementum diam, sodales tempor magna venenatis vitae. In scelerisque sem at dolor. Maecenas mattis. Nulla mollis sem magna, in faucibus ligula tincidunt at. Aliquam tempor eros porttitor quam aliquet ornare. Quisque orci diam, eleifend sit amet enim commodo, tincidunt laoreet orci. Nulla a risus lectus.",
	},
	{
		id: 7,
		author: "hoby",
		email: "hoby@gmail.com",
		text: "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, allamcorper vel, tincidunt sed, euismod in, nibh.",
	},
];

export const initialCommentState = [
	{
		id: 1,
		post_id: 1,
		author: "mia",
		email: "mia@gmail.com",
		text: "This is first comment for post 1.",
	},
	{
		id: 2,
		post_id: 1,
		author: "luigi",
		email: "luigi@gmail.com",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
	},
	{
		id: 3,
		post_id: 2,
		author: "hoby",
		email: "hobyfrezk@gmail.com",
		text: "This is first comment for post 2.",
	},
	{
		id: 4,
		post_id: 6,
		author: "hoby",
		email: "hobyfrezk@gmail.com",
		text: "Praesent libero. Sed cursus ante dapibus diam.",
	},
	{
		id: 5,
		post_id: 6,
		author: "mia",
		email: "mia@gmail.com",
		text: "Vivamus eu turpis est. Mauris a molestie dolor. Donec egestas varius consectetur. Aenean sit amet urna ac sapien facilisis fringilla. Quisque vehicula elementum diam, sodales tempor magna venenatis vitae. Nulla mollis sem magna, in faucibus ligula tincidunt at. Aliquam tempor eros porttitor quam aliquet ornare. Quisque orci diam, eleifend sit amet enim commodo, tincidunt laoreet orci.",
	},
];
