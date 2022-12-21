<script>
	import { T, OrbitControls } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	const persp = {
		makeDefault: true,
		position: [30, 30, 30],
		fov: 55
	};
    const orbit = {
        maxPolarAngle: degToRad(80),
        enableZoom: true,
        target: { y: 0 } 
    }
</script>

<T.PerspectiveCamera {...persp}>
	<OrbitControls {...orbit}/>
</T.PerspectiveCamera>