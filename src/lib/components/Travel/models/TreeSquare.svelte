<script lang="ts">
	import { GLTF } from '@threlte/extras';

	type Variant = 's1' | 's2' | 'l1';
	export let variant: Variant = 's1';
	export let scale = 0.01;
	export let position = { x: 0, y: 0, z: 0 };

	// all the variants of the glTF/glB
	const gltfs = {
		l1: '/geometry/trees/tree_large.glb',
		s1: '/geometry/trees/tree_small_1.glb',
		s2: '/geometry/trees/tree_small_2.glb'
	};

	const url = gltfs[variant];
	
	// props
	const tree = {
		url: url,
		scale: scale,
		position: position,
		castShadow: true
	};
</script>

<GLTF {...tree} />
