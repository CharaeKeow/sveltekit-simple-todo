<script lang="ts">
	import { Button } from './button';
	import { Input } from './input';
	import { Label } from './label';
</script>

<div>
	<h2>Add New Task</h2>
	<form method="POST" action="?/addTodo">
		<div class="mt-4 flex w-[400px] flex-col gap-y-4">
			<div class="space-y-2">
				<Label for="task">Task</Label>
				<Input id="task" name="task" type="text" placeholder="Add new task..." required />
			</div>
			<Button class="w-fit self-center" type="submit">Add Task</Button>
		</div>
	</form>
</div>
