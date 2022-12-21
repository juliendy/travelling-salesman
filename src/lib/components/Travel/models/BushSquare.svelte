<script lang="ts">
	import { GLTF } from '@threlte/extras';

	type Variant = 's1' | 's2' | 'l1';
	export let variant: Variant = 's1';
	export let scale = 0.01;
	export let position = { x: 0, y: 0, z: 0 };
	
	// all the variants of the glTF/glB
	const gltfs = {
		l1: '/geometry/bushes/bush_large.glb',
		s1: '/geometry/bushes/bush_small_1.glb',
		s2: '/geometry/bushes/bush_small_2.glb'
	};

	// get the variant from the GLBList
	// https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression
	const url = gltfs[variant];
	// props
	const gltf = {
		url: url,
		scale: scale,
		position: position,
		castShadow: true
	};
</script>

<GLTF {...gltf} />
