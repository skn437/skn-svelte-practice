<script lang="ts">
	import "./home.scss";
	import { counter } from "./home.svelte";
	import HomeComponent from "./HomeComponent.svelte";
	import { home } from "./data.svelte";

	import type { PageServerData } from "./$types";

	import { HomePagePipeline } from "./data.pipe";

	let { data } = $props<PagePropsDataType<PageServerData>>(); //* Definite Assignment Assertions

	HomePagePipeline(data);

	console.log(home.users);
</script>

<template>
	<div class="container">
		<button
			class="increment"
			on:click={counter.increment}
		>
			Increase Count: {counter.count}</button
		>

		<button
			class="decrement"
			on:click={counter.decrement}
		>
			Decrease Count: {counter.count}
		</button>

		<p class="square">Squared Count: {counter.sqrCount}</p>
	</div>

	<HomeComponent
		title="Home"
		sign="Leo"
	/>

	{#each home.users as user, index (index)}
		<p>{user.email}</p>
	{/each}

	<p>{home.total}</p>
</template>

<style lang="scss">
</style>
