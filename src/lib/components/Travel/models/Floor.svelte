<script>
	import { T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<!-- Floor -->
<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
	<T.PlaneGeometry args={[10, 10]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>