<script>
	import { T, OrbitControls } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	const ortho = {
		makeDefault: true,
		position: [1000, 1000, 1000],
		zoom: 20
		// near: 0.1
		// far: 100000
	};
	const orbit = {
		maxPolarAngle: degToRad(80),
		enableZoom: true,
		target: { x: 0, y: 0, z: 0 },
		autoRotate: true
	};
</script>

<T.OrthographicCamera {...ortho}>
	<OrbitControls {...orbit} />
</T.OrthographicCamera>