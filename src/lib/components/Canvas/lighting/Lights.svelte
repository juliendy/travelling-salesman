<script>
	import { T } from '@threlte/core';
</script>

<T.DirectionalLight
	{...{
		position: [3, 10, 10],
		intensity: 1,
		castShadow: true
		//
		// These shadow properties result in: `shadow.getFrameExtents is not a function`
		//
		// shadow: {
		// 	mapSize: [1024, 1024],
		// 	camera: {
		// 		left: -5,
		// 		top: 5,
		// 		right: 5,
		// 		bottom: -5,
		// 		near: 0.5,
		// 		far: 1000
		// 	},
		// 	bias: 0,
		// 	radius: 1
		// }
	}}
/>

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