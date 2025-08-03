import type { Todo } from '$lib/types/todo';
import type { PageServerLoad } from './$types';
import { API_BASE_URL } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';

const TODO_API_URL = `${API_BASE_URL}/todo`;

export const load: PageServerLoad = async () => {
	return {
		todos: (await fetch(TODO_API_URL).then((res) => res.json())) as Todo[]
	};
};

export const actions = {
	addTodo: async ({ request }) => {
		const formData = await request.formData();
		const task = formData.get('task') as string; // This type assertion is fine since we make the task input required in the form

		// Perhaps could encapsulate this into a function?
		const todo: Todo = {
			uuid: crypto.randomUUID(),
			task: task,
			is_done: false
		};

		const response = await fetch(TODO_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ todo })
		});

		if (response.ok) {
			return { success: true };
		} else {
			// IRL this would be a more detailed error handling
			console.error({ response });
			return {
				success: false,
				error: `Failed to add todo.`
			};
		}
	}
} satisfies Actions;
