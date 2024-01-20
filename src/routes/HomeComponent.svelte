<script lang="ts">
	import { home } from "./data.svelte";
	interface PropsType {
		title: string;
		sign: string;
	}

	let { title, sign } = $props<PropsType>();
</script>

<template>
	<p>{title} Component bears the {sign} sign</p>

	{#each home.users as user, index (index)}
		<p>{user.name}</p>
	{/each}
</template>
