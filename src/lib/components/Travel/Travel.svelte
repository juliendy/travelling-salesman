<script>
	import { Canvas } from '@threlte/core';
	import Persp from './cameras/Persp.svelte';
	import Cube from '$lib/components/Travel/models/Cube.svelte';
	import Floor from '$lib/components/Travel/models/Floor.svelte';
	import Lights from '$lib/components/Travel/lighting/Lights.svelte';
	import Helpers from './utils/Helpers.svelte';
</script>

<div>
	<Canvas>
		<!-- Cameras -->
		<Persp />
		<!-- Lighting -->
		<Lights />
		<!-- Geometry -->
		<Floor />
		<Cube />
		<!-- Utils -->
		<Helpers />
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
		min-height: 500px;
	}
</style>
