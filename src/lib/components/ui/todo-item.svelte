<script lang="ts">
	import type { Todo } from '$lib/types/todo';
	import Checkbox from './checkbox/checkbox.svelte';
	import { Label } from './label';

	type Props = {
		todo: Todo;
	};

	const { todo }: Props = $props();
	const id = `todo-${todo.uuid}`;
</script>

<div class="flex items-center gap-2">
	<Checkbox {id} checked={todo.is_done} />
	<Label for={id}>{todo.task}</Label>
</div>
