<script lang="ts">
	import { useThrelte } from '@threlte/core';
	import { Color } from 'three';
	import type { ColorRepresentation } from 'three';
    
	export let color: ColorRepresentation;

	// https://threlte.xyz/core/use-threlte
	const { scene } = useThrelte();
	scene.background = new Color(color);
</script>