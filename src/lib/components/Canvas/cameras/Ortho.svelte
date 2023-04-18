<script>
	import { T, OrbitControls } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import { targetCamera } from '$lib/stores/store';

	const ortho = {
		makeDefault: true,
		position: [10, 10, 10],
		zoom: 300,
		near: 1,
		far: 2000
	};
	const orbit = {
		enableDamping: true,
		maxPolarAngle: degToRad(80),
		// maxAzimuthAngle: degToRad(85),
		// enableZoom: true,
		// target: { x: 0, y: 0, z: 0 }
		// autoRotate: true,
		// autoRotateSpeed: 0.2
	};
</script>

<T.OrthographicCamera {...ortho}>
	<OrbitControls {...orbit} target={{ x: $targetCamera, y: 0, z: 0 }} />
</T.OrthographicCamera>