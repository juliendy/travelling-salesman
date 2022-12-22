<script>
	import { Canvas } from '@threlte/core';

	//camera
	// import Persp from './cameras/Persp.svelte';
	import Ortho from './cameras/Ortho.svelte';

	// geometry
	import Cube from '$lib/components/Travel/utils/Cube.svelte';
	// import Floor from '$lib/components/Travel/utils/Floor.svelte';
	import TreeSquare from '$lib/components/Travel/models/TreeSquare.svelte';
	import BushSquare from './models/BushSquare.svelte';

	// lighting
	import Lights from '$lib/components/Travel/lighting/Lights.svelte';

	// utilities
	import Helpers from './utils/Helpers.svelte';
	import Background from '$lib/components/Travel/utils/Background.svelte';
	import House from './models/House.svelte';
	import Salesman from './models/Salesman.svelte';
</script>

<div>
	<Canvas rendererParameters={{ antialias: true }}>
		<!-- Cameras -->
		<Ortho />
		<!-- Lighting -->
		<Lights />
		<!-- Geometry -->
		<!-- <Floor /> -->
		<Cube />
		<House position={{ x: 8, y: 0, z: -6 }} />
		<Salesman position={{ x: -8, y: 0, z: 0 }} />
		<TreeSquare variant="l1" position={{ x: 2, y: 0, z: -7 }} />
		<TreeSquare variant="s1" position={{ x: -4, y: 0, z: -4 }} />
		<TreeSquare variant="s2" position={{ x: 7, y: 0, z: -9 }} />
		<BushSquare variant="l1" position={{ x: 4, y: 0, z: 7 }} />
		<BushSquare variant="s1" position={{ x: 3, y: 0, z: -4 }} />
		<BushSquare variant="s2" position={{ x: 8, y: 0, z: -4 }} />y
		<!-- Utils -->
		<Helpers />
		<Background color={'#50aee3'} />
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
		min-height: 500px;
	}
</style>
