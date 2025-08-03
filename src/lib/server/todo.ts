import type { Todo } from '$lib/types/todo';

// TODO: Where's the best place to put this? Put here for now.
export const todos: Todo[] = [
	{
		uuid: '1',
		task: 'Learn SvelteKit',
		is_done: true
	},
	{
		uuid: '2',
		task: 'Build a TODO app',
		is_done: false
	},
	{
		uuid: '3',
		task: 'Deploy the app',
		is_done: false
	}
];
