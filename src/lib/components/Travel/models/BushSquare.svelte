<script lang="ts">
	import { GLTF } from '@threlte/extras';
	interface GLBList {
		normal: string[];
		large: string[];
		small: string[];
	}
	type Size = 'large' | 'normal' | 'small';
	export let size: Size = 'normal';
	export let variant = 0;
	export let scale = 0.01;
	export let position = { x: 0, y: 0, z: 0 };
	// all the variants of the glTF/glB
	const glb: GLBList = {
		normal: [''],
		large: ['/geometry/bushes/bush_large.glb'],
		small: ['/geometry/bushes/bush_small_1.glb', '/geometry/bushes/bush_small_2.glb']
	};
	// get the variant from the GLBList
	// https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression
	const url = glb[size as keyof GLBList][variant];
	// props
	const gltf = {
		url: url,
		scale: scale,
		position: position,
		castShadow: true
	};
</script>

<GLTF {...gltf} />