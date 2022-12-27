<script>
	import { T } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
</script>

<T.Mesh receiveShadow rotation.x={degToRad(-90)} position.y={0.001}>
	<T.PlaneGeometry args={[10000, 5]} />
	<T.MeshStandardMaterial color="#333" />
</T.Mesh>