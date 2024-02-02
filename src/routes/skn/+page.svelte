<script lang="ts">
	import { arrayCounter } from "./array.svelte";

	const { array, addItem, removeItem } = arrayCounter;

	let inputValue = $state<string>("0");
</script>

<template>
	{#each array as number, index (index)}
		<p>Element: {number}</p>
	{/each}

	<input
		type="text"
		bind:value={inputValue}
	/>
	<button on:click={() => addItem(parseInt(inputValue))}>Push Item</button>

	<button on:click={removeItem}>Remove Item</button>

	<p>{arrayCounter.total}</p>
</template>
