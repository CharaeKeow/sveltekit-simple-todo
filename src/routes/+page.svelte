<script lang="ts">
	import AddTodoForm from '$lib/components/ui/add-todo-form.svelte';
	import TodoItem from '$lib/components/ui/todo-item.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const { todos } = data;
</script>

<div class="flex flex-col gap-y-2 px-8 py-6">
	<h1>TODO List</h1>

	<AddTodoForm />

	<h2 class="mt-4">Current List</h2>
	{#each todos as todo (todo.uuid)}
		<TodoItem {todo} />
	{/each}
</div>
