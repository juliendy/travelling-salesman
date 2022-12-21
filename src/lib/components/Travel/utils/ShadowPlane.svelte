<script>
	import { T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<!-- Floor -->
<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
	<T.PlaneGeometry args={[100, 100]} />
	<T.ShadowMaterial opacity={0.3} />
</T.Mesh>