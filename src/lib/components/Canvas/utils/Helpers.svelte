<script>
	import { Object3DInstance } from '@threlte/core';
	import { GridHelper, AxesHelper } from 'three';
	const gridHelper = new GridHelper(20, 20);
	const axesHelper = new AxesHelper(10);
</script>

<!-- Do not use the T. prefix Object3DInstance -->
<!-- Object3DInstance is not part of 'three' -->
<Object3DInstance object={axesHelper} />
<Object3DInstance object={gridHelper} />