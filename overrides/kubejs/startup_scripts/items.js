StartupEvents.registry('item', event => {

	//Adds custom versions of these items, simplifies item searching and recipies
	//Shadow Radiance
	event.create('shadow_radiance')
		.texture('kubejs:item/shadow_radiance')
	
	//Chromatic Compound
	event.create('chromatic_compound')
		.texture('kubejs:item/chromatic_compound')
	
})