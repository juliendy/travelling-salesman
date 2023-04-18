<script>
	import { T, OrbitControls } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	const persp = {
		makeDefault: true,
		position: [1, 1, 3],
		fov: 40
	};
	const orbit = {
		maxPolarAngle: degToRad(80),
		enableZoom: true,
		target: { y: 0 }
	};
</script>

<T.PerspectiveCamera {...persp}>
	<OrbitControls {...orbit} />
</T.PerspectiveCamera>
