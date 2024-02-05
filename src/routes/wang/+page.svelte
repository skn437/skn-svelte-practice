<script lang="ts">
	import type { PageServerData } from "./$types";
	import "./wang.scss";
	//import { token } from "../layout.svelte";

	let { data } = $props<PagePropsDataType<PageServerData>>();

	console.log(data);
	//	console.log(token.csrf.token);
</script>

<template>
	<p class="message">{JSON.stringify(data.message)}</p>
	<p class="message">{JSON.stringify(data.message2)}</p>
</template>

<style lang="scss">
</style>
