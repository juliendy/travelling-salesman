<script>
	import { T } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	const tree = {
		url: '/geometry/trees/tree_large.glb',
		scale: 0.01,
		position: { x: 2, y: 0, z: 0 },
		castShadow: true
	};
</script>

<T.Mesh>
	<GLTF {...tree} />
</T.Mesh>