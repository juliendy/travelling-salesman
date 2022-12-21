<script>
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import Cube from '$lib/components/Travel/models/Cube.svelte';
	import Floor from '$lib/components/Travel/models/Floor.svelte';
</script>

<div>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} target={{ y: 0.5 }} />
		</T.PerspectiveCamera>

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
