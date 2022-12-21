<script>
	import { Canvas } from '@threlte/core';
	import Persp from './cameras/Persp.svelte';
	import Cube from '$lib/components/Travel/models/Cube.svelte';
	import Floor from '$lib/components/Travel/models/Floor.svelte';
	import Tree from '$lib/components/Travel/models/trees/TreeLarge.svelte';
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
		<Tree />
		<BushSquare size="large" variant={0} position={{ x: 4, y: 0, z: 7 }} />
		<BushSquare size="small" variant={0} position={{ x: 3, y: 0, z: 8 }} />
		<BushSquare size="small" variant={1} position={{ x: 8, y: 0, z: 3 }} />x
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
