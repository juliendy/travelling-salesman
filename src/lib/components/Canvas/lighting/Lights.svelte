<script>
	import { T } from '@threlte/core';
</script>

<T.DirectionalLight castShadow position={[3, 10, 10]} intensity={1}>
	<T.OrthographicCamera
		attach="shadow.camera"
		left={-10}
		right={10}
		top={10}
		bottom={-10}
		near={1}
		far={1000}
		zoom={300}
	/>

	<T.Vector2 attach="shadow.mapSize" args={[1024, 1024]} />
</T.DirectionalLight>

<T.DirectionalLight
	{...{
		position: [3, 10, -10],
		intensity: 0.3
	}}
/>
<T.AmbientLight
	{...{
		intensity: 0.5
	}}
/>