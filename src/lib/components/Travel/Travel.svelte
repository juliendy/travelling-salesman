<script>
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import Persp from './cameras/Persp.svelte';
	import Cube from '$lib/components/Travel/models/Cube.svelte';
	import Floor from '$lib/components/Travel/models/Floor.svelte';
</script>

<div>
	<Canvas>
		<!-- Cameras -->
		<Persp />

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.AmbientLight intensity={0.2} />
		<!-- Geometry -->
		<Floor />
		<Cube />
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
		min-height: 500px;
	}
</style>
