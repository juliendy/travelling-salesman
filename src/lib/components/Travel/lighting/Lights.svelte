<script>
	import { T } from '@threlte/core';
	const dir = {
		castShadow: true,
		position: [3, 10, 10],
		intensity: 1
	};
</script>

<T.DirectionalLight {...dir} />
<T.DirectionalLight position={[3, 10, -10]} intensity={0.3} />
<T.AmbientLight intensity={0.3} />