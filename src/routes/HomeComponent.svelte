<script lang="ts">
	interface PropsType {
		title: string;
		sign: string;
	}

	let { title, sign } = $props<PropsType>();
</script>

<template>
	<p>{title} Component bears the {sign} sign</p>
</template>
