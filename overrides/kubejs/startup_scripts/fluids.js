StartupEvents.registry('fluid', event => {
	
	//Spectral Fluid
	event.create('spectral_fluid')
		.displayName('Spectral Fluid')
		.stillTexture('kubejs:block/water_still')
		.flowingTexture('kubejs:block/water_flow')
		.renderType('translucent')
	
})