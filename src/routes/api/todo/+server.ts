import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { todos } from '$lib/server/todo';
import type { Todo } from '$lib/types/todo';

type TodoRequestBody = {
	todo: Todo;
};

// TODO: Might be better to change this to be under `/todos` route since it's getting multiple todos
export const GET: RequestHandler = async () => {
	return json(todos);
};

// Add new todo
export const POST: RequestHandler = async ({ request }) => {
	console.log({ request });

	// ? IRL we would validate this using zod for instance. This is skipped due to time constraint
	const { todo } = (await request.json()) as TodoRequestBody;

	console.log({ todo });

	todos.push(todo); // Simply push to the object since we are not using a database.

	return json({
		success: true
	});
};

// Update todo checked status
// export const PUT: RequestHandler = async ({ request }) => {};
