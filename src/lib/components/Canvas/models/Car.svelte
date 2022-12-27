<script>
	import { GLTF } from '@threlte/extras';
	export let scale = 0.01;
	export let position = { x: 0, y: 0, z: 1.25 };
	const url = '/geometry/cars/car.glb';
	// props
	const gltf = {
		url: url,
		scale: scale,
		position: position,
		castShadow: true
	};
</script>

<GLTF {...gltf} />