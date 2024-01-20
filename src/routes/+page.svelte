<script lang="ts">
	import "./home.scss";
	import { counter } from "./home.svelte";
	import HomeComponent from "./HomeComponent.svelte";
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
</template>

<style lang="scss">
</style>
