<script>
	import { T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<!-- Floor -->
<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
	<T.PlaneGeometry args={[1000, 1000]} />
	<T.MeshStandardMaterial color="#2d472e" />
</T.Mesh>