<script>
	import { GLTF } from '@threlte/extras';
	export let variant = 0;
	export let scale = 0.01;
	export let position = { x: 0, y: 0, z: 0 };
	// all the variants of the glTF/glB
	const urls = [
		'/geometry/trees/tree_large.glb',
		'/geometry/trees/tree_small_1.glb',
		'/geometry/trees/tree_small_2.glb'
	];
	const url = urls[variant];
	// props
	const tree = {
		url: url,
		scale: scale,
		position: position,
		castShadow: true
	};
</script>

<GLTF {...tree} />