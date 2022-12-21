<script>
	import { Canvas } from '@threlte/core';
	import Persp from './cameras/Persp.svelte';
	import Cube from '$lib/components/Travel/models/Cube.svelte';
	import Floor from '$lib/components/Travel/models/Floor.svelte';
	import TreeSquare from '$lib/components/Travel/models/TreeSquare.svelte';
	import Lights from '$lib/components/Travel/lighting/Lights.svelte';
	import Helpers from './utils/Helpers.svelte';
	import BushSquare from './models/BushSquare.svelte';
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
		<TreeSquare variant="l1" position={{ x: 2, y: 0, z: 0 }} />
		<TreeSquare variant="s1" position={{ x: -4, y: 0, z: 4 }} />
		<TreeSquare variant="s2" position={{ x: 7, y: 0, z: 7 }} />
		<BushSquare variant="l1" position={{ x: 4, y: 0, z: 7 }} />
		<BushSquare variant="s1" position={{ x: 3, y: 0, z: 8 }} />
		<BushSquare variant="s2" position={{ x: 8, y: 0, z: 3 }} />y
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
