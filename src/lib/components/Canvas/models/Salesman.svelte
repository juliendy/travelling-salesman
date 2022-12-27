<script>
	import { GLTF } from '@threlte/extras';
	export let scale = 0.01;
	export let position = { x: 0, y: 0, z: -1.5 };
	const url = '/geometry/characters/salesman.glb';
	// props
	const gltf = {
		url: url,
		scale: scale,
		rotation: {x: 0, y: Math.PI/2, z: 0},
		position: position,
		castShadow: true
	};
</script>

<GLTF {...gltf} />