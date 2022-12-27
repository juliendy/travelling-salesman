<script>
	import { GLTF } from '@threlte/extras';
	export let scale = 0.01;
	export let position = { x: 0, y: 0, z: 0 };
	const gltf = {
		url: '/geometry/houses/house.glb',
		scale: scale,
		position: position,
		castShadow: true
	};
</script>

<GLTF {...gltf} />