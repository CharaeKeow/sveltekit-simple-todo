<script lang="ts">
	import AddTodoForm from '$lib/components/ui/add-todo-form.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const { todos } = data;

	console.log({ todos });
</script>

<div class="flex flex-col gap-y-2 px-8 py-6">
	<h1>TODO List</h1>

	<AddTodoForm />

	<div></div>
</div>
