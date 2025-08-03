import type { Todo } from '$lib/types/todo';

// TODO: Extract this to a separate file. Or maybe a DB in the future (skipped this due to time constraint)
export const todos: Todo[] = [
	{
		uuid: '1',
		task: 'Learn SvelteKit',
		is_done: false
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
