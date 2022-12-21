<script>
	import { T, OrbitControls } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	const ortho = {
		makeDefault: true,
		position: [10, 10, 10],
		zoom: 20
	};
	const orbit = {
		maxPolarAngle: degToRad(80),
		enableZoom: true,
		target: { x: 0, y: 0, z: 0 }
	};
</script>

<T.OrthographicCamera {...ortho}>
	<OrbitControls {...orbit} />
</T.OrthographicCamera>