<script lang="ts">
	import type { PageServerData } from "./$types";
	import { SoRoutePipeline } from "./so.pipe";
	import { skn } from "./so.svelte";
	import "./so.style.scss";

	let { data } = $props<PagePropsDataType<PageServerData>>();

	SoRoutePipeline(data);

	const { skn: SKN, idArray, total } = skn;
</script>

<template>
	<div class="users">
		{#each SKN as sknUnit, index (index)}
			<div class="user">
				<p class="info"><span class="title">Name:</span> {sknUnit.name}</p>
				<p class="info">
					<span class="title">Username:</span>
					{sknUnit.username}
				</p>
				<p class="info"><span class="title">Phone:</span> {sknUnit.phone}</p>
				<p class="info"><span class="title">Email:</span> {sknUnit.email}</p>
			</div>
		{/each}
	</div>

	<div class="derived">
		<p>ID Array: {JSON.stringify(idArray)}</p>
		<p>Total: {total}</p>
	</div>
</template>

<style lang="scss">
</style>
