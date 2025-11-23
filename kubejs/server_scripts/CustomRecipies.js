ServerEvents.recipes(event => {
	
	//==========Smithing Recipes==========
	//Computing Mechanism
	event.smithing(
        'create:creative_motor',
        'createmechanisms:computing_mechanism',
        'kubejs:nether_star_block',
        'minecraft:netherite_block'
    )
	event.smithing(
        'create:creative_fluid_tank',
        'createmechanisms:computing_mechanism',
        'kubejs:nether_star_block',
        'create_enchantment_industry:super_experience_block'
    )
	event.smithing(
        'create:creative_fluid_tank',
        'createmechanisms:computing_mechanism',
        'minecraft:netherite_block',
        'kubejs:nether_star_block'
    )
	event.smithing(
        'create:creative_blaze_cake',
        'createmechanisms:computing_mechanism',
        'minecraft:netherite_block',
        'minecraft:netherite_block'
    )
	event.smithing(
        'create:handheld_worldshaper',
        'createmechanisms:computing_mechanism',
        'kubejs:nether_star_block',
        'create:extendo_grip'
    )
	
	//Advanced Precision Mechanism
	event.smithing(
        'create:attribute_filter',
        'createmechanisms:advanced_precision_mechanism',
        'minecraft:gray_wool',
        'create:brass_nugget'
    )
    event.smithing(
        'create:smart_fluid_pipe',
        'createmechanisms:advanced_precision_mechanism',
        'create:fluid_pipe',
        'create:electron_tube'
	)
    event.smithing(
        'create:smart_chute',
        'createmechanisms:advanced_precision_mechanism',
        'create:chute',
        'create:electron_tube'
    )
    event.smithing(
        'create:content_observer',
        'createmechanisms:advanced_precision_mechanism',
        'minecraft:observer',
        'create:electron_tube'
    )
	event.smithing(
        'create:packager',
        'createmechanisms:advanced_precision_mechanism',
        'minecraft:hopper',
        'create:electron_tube'
    )
	event.smithing(
        'create_factory_logistics:jar_packager',
        'createmechanisms:advanced_precision_mechanism',
        'uppers:upper',
        'create:electron_tube'
	)
	event.smithing(
        'create:package_frogport',
        'createmechanisms:advanced_precision_mechanism',
        'minecraft:slime_ball',
        'create:item_vault'
    )
	event.smithing(
        'create:factory_gauge',
        'createmechanisms:advanced_precision_mechanism',
        'create:precision_mechanism',
        'minecraft:comparator'
    )
	event.smithing(
        'create_factory_logistics:factory_fluid_gauge',
        'createmechanisms:advanced_precision_mechanism',
        'create:precision_mechanism',
        'minecraft:repeater'
    )
	
	//Heat Mechanism
	event.smithing(
        'create:steam_whistle',                          // arg 1: output
        'createmechanisms:heat_mechanism',               // arg 2: the smithing template
        'minecraft:copper_block',                        // arg 3: the item to be upgraded
        'create:golden_sheet'                            // arg 4: the upgrade item
    )
    event.smithing(
        'create:steam_engine',                           // arg 1: output
        'createmechanisms:heat_mechanism',               // arg 2: the smithing template
        'minecraft:copper_block',                        // arg 3: the item to be upgraded
        'create:brass_sheet'                             // arg 4: the upgrade item
    )
    event.shaped(
        Item.of('create:empty_blaze_burner', 1), // arg 1: output
        [
            'BAB',
            'ABA', // arg 2: the shape (array of strings)
            'BAB'
        ],
        {
            A: 'minecraft:iron_block',
            B: 'createmechanisms:heat_mechanism'
        }
    )
	
	//Rubber Mechanism
	event.smithing(
        'create:portable_fluid_interface',
        'createmechanisms:rubber_mechanism',
        'create:copper_casing',
        'create:chute'
    )
    event.smithing(
        'create:spout',
        'createmechanisms:rubber_mechanism',
        'create:copper_casing',
        'createmechanisms:cured_rubber'
    )
    event.smithing(
        'create:item_drain',
        'createmechanisms:rubber_mechanism',
        'create:copper_casing',
        'minecraft:iron_bars'
    )
    event.smithing(
        'create:hose_pulley',
        'createmechanisms:rubber_mechanism',
        'create:copper_casing',
        'minecraft:dried_kelp_block'
    )
    event.smithing(
        'create:fluid_valve',
        'createmechanisms:rubber_mechanism',
        'create:fluid_pipe',
        'create:shaft'
    )
    event.smithing(
        'create:mechanical_pump',
        'createmechanisms:rubber_mechanism',
        'create:fluid_pipe',
        'create:cogwheel'
    )
	event.smithing(
        'create:fluid_tank',
        'createmechanisms:rubber_mechanism',
        'create:copper_casing',
        'minecraft:glass'
    )
	event.smithing(
        'create:fluid_pipe',
        'createmechanisms:rubber_mechanism',
        'minecraft:copper_ingot',
        'minecraft:bucket'
    )
	
	//Wooden Mechanism
	event.smithing(
        'create:mechanical_press',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'minecraft:iron_block'
    )
    event.smithing(
        'create:mechanical_mixer',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'create:whisk'
    )
    event.smithing(
        'create:millstone',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        '#c:stones'
    )
    event.smithing(
        'create:encased_fan',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'create:propeller'
    )
    event.smithing(
        'create:encased_chain_drive',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'minecraft:chain'
    )
    event.smithing(
        'create:vertical_gearbox',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'create:cogwheel'
    )
    event.smithing(
        'create:gearbox',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'create:cogwheel'
    )
    event.smithing(
        'create:mechanical_bearing',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'minecraft:sticky_piston'
    )
    event.smithing(
        'create:sticker',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'minecraft:slime_block'
    )
    event.smithing(
        'create:rope_pulley',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'minecraft:dried_kelp_block'
    )
    event.smithing(
        'create:mechanical_drill',
        'createmechanisms:wooden_mechanism',
        'minecraft:iron_block',
        'create:andesite_alloy'
	)
    event.smithing(
        'create:mechanical_saw',
        'createmechanisms:wooden_mechanism',
        'minecraft:iron_block',
        'create:iron_sheet'
    )
    event.smithing(
        'create:deployer',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',
        'create:brass_hand'
    )
    event.smithing(
        'create:portable_storage_interface',
        'createmechanisms:wooden_mechanism',
        'minecraft:iron_block',
        'create:chute'
    )
    event.smithing(
        'create:mechanical_harvester',
        'createmechanisms:wooden_mechanism',
        'create:andesite_alloy',
        'create:iron_sheet'
    )
    event.smithing(
        'create:mechanical_plough',
        'createmechanisms:wooden_mechanism',
        'create:iron_sheet',
        'create:andesite_alloy'
    )
    event.smithing(
        'create:mechanical_roller',
        'createmechanisms:wooden_mechanism',
        'create:andesite_casing',     
        'create:crushing_wheel'
    )
	
	//Precision Mechanism
	event.smithing(
        'create:clockwork_bearing',
        'create:precision_mechanism',
        'create:brass_casing',
        'minecraft:sticky_piston'
    )
    event.smithing(
        'create:elevator_pulley',
        'create:precision_mechanism',
        'create:brass_casing',
        'minecraft:dried_kelp_block'
    )
    event.smithing(
        'create:sequenced_gearshift',
        'create:precision_mechanism',
        'create:brass_casing',
        'create:electron_tube'
    )
	
	//Rubber
	event.shaped(
        Item.of('create:andesite_tunnel', 2),
        [
            'AA',
            'BB'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'createmechanisms:cured_rubber'
        }
    )
    event.shaped(
        Item.of('create:brass_tunnel', 2),
        [
            'C ',
            'AA',
            'BB'
        ],
        {
            A: 'create:brass_ingot',
            B: 'createmechanisms:cured_rubber',
            C: 'create:electron_tube'
        }
    )
    event.shaped(
        Item.of('create:andesite_funnel', 4),
        [
            'A',
            'B'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'createmechanisms:cured_rubber'
        }
    )
    event.shaped(
        Item.of('create:brass_funnel', 4),
        [
            'C',
            'A',
            'B'
        ],
        {
            A: 'create:brass_ingot',
            B: 'createmechanisms:cured_rubber',
            C: 'create:electron_tube'
        }
    )
    event.shaped(
        Item.of('create:package_frogport', 1),
        [
            'C',
            'A',
            'B'
        ],
        {
            A: 'create:item_vault',
            B: 'create:andesite_alloy',
            C: 'createmechanisms:cured_rubber'
        }
    )
    event.shaped(
        Item.of('create:belt_connector', 2),
        [
            'AAA',
            'AAA'
        ],
        {
            A: 'createmechanisms:cured_rubber'
        }
    )
	
	//Zinc Mechanism
	event.smithing(
        'create:speedometer',
        'createmechanisms:zinc_mechanism',
        'create:andesite_casing',
        'minecraft:compass'
    )
    event.smithing(
        'create:adjustable_chain_gearshift',
        'createmechanisms:zinc_mechanism',
        'create:andesite_casing',
        'create:electron_tube'
    )
    event.smithing(
        'create:gearshift',
        'createmechanisms:zinc_mechanism',
        'create:andesite_casing',
        'minecraft:redstone'
    )
    event.smithing(
        'create:clutch',
        'createmechanisms:zinc_mechanism',
        'create:andesite_casing',
        'minecraft:redstone_torch'
    )
    event.smithing(
        'create:chain_conveyor',
        'createmechanisms:zinc_mechanism',
        'create:andesite_casing',
        'create:large_cogwheel'
    )
    event.smithing(
        'create:filter',
        'createmechanisms:zinc_mechanism',
        'minecraft:white_wool',
        'minecraft:iron_nugget'
    )
    event.smithing(
        'create:package_filter',
        'createmechanisms:zinc_mechanism',
        'minecraft:white_wool',
        'create:zinc_nugget'
    )
    event.smithing(
        'create:windmill_bearing',
        'createmechanisms:zinc_mechanism',
        'create:industrial_iron_block',
        'minecraft:sticky_piston'
    )
    event.smithing(
        'create:contraption_controls',
        'createmechanisms:zinc_mechanism',
        'create:electron_tube',
        'minecraft:oak_button'
    )
    event.smithing(
        'create:track_observer',
        'createmechanisms:zinc_mechanism',
        'create:railway_casing',
        'minecraft:observer'
    )
    event.smithing(
        'create:track_station',
        'createmechanisms:zinc_mechanism',
        'create:railway_casing',
        'minecraft:compass'
    )
    event.smithing(
        'create:track_signal',
        'createmechanisms:zinc_mechanism',
        'create:railway_casing',
        'create:electron_tube'
    )
    event.smithing(
        'create:stockpile_switch',
        'createmechanisms:zinc_mechanism',
        'create:brass_casing',
        'minecraft:comparator'
    )
	event.smithing(
        'create:redstone_contact',
        'createmechanisms:zinc_mechanism',
        'create:industrial_iron_block',
        'minecraft:redstone'
    )



    event.shapeless(
        Item.of('create:controls', 4),
        [
            'createmechanisms:zinc_mechanism',
            'minecraft:lever',
            'create:electron_tube'
        ]
    )
	
	//Shadow Steel
    event.custom({
       "type": "create:mixing",
	   "heat_requirement": "heated",
       "ingredients": [
           {
               "item": "minecraft:ender_pearl"
           },
           {
               "item": "minecraft:obsidian"
           },
		   {
			   "item": "create:polished_rose_quartz"
		   },
		   {
			   "item": "minecraft:netherrack"
		   },
		   {
			   "item": "create:brass_ingot"
		   },
           {
               "type": "fluid_stack",
               "amount": 250,
               "fluid": "minecraft:lava"
           }
       ],
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "create:shadow_steel"
               },
               "amount": 1
           }
       ]
   })
   
   //Refined Radiance
   event.custom({
       "type": "create:mixing",
	   "heat_requirement": "heated",
       "ingredients": [
           {
               "item": "minecraft:gold_block"
           },
           {
               "item": "minecraft:glowstone_dust"
           },
		   {
			   "item": "minecraft:ender_eye"
		   },
		   {
			   "item": "minecraft:amethyst_shard"
		   },
		   {
			   "item": "create:electron_tube"
		   },
           {
               "type": "fluid_stack",
               "amount": 250,
               "fluid": "minecraft:lava"
           }
       ],
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "create:refined_radiance"
               },
               "amount": 1
           }
       ]
   })
   
   //Shadow Radiance
   event.custom({
       "type": "create:mixing",
	   "heat_requirement": "superheated",
       "ingredients": [
           {
               "item": "create:refined_radiance"
           },
           {
               "item": "create:shadow_steel"
           },
           {
               "type": "fluid_stack",
               "amount": 250,
               "fluid": "create_enchantment_industry:experience"
           }
       ],
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "kubejs:shadow_radiance"
               },
               "amount": 1
           }
       ]
   })
   
   //Chromatic Compound
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "create:andesite_alloy"
       },
       "loops": 3,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "kubejs:chromatic_compound"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:red_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:orange_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:yellow_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:green_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:blue_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "create:andesite_alloy"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:purple_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "create:andesite_alloy"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "create:andesite_alloy"
           },
           "amount": 1
       }
   })
   
   //Spectral Fluid
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "minecraft:bucket"
       },
       "loops": 1,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "kubejs:spectral_fluid_bucket"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:red_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:orange_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:yellow_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:green_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:blue_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "minecraft:bucket"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "create_dragons_plus:purple_dye"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "minecraft:bucket"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "minecraft:bucket"
           },
           "amount": 1
       }
   })
   
   //Nether Star Block
   event.custom({
       "type": "create:compacting",
	   "heat_requirement": "superheated",
       "ingredients": [
           {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           },
		   {
               "item": "minecraft:nether_star"
           }
       ],
       "results": [
           {
               "count": 1,
               "item": {
                   "id": "kubejs:nether_star_block"
               }
           }
       ]
   })
   
   //Dragons Breath
   event.custom({
       "type": "create:mixing",
	   "heat_requirement": "superheated",
       "ingredients": [
           {
               "item": "minecraft:dragon_egg"
           },
           {
               "item": "minecraft:ender_eye"
           },
		   {
               "item": "minecraft:phantom_membrane"
           },
		   {
               "item": "minecraft:chorus_fruit"
           },
		   {
               "item": "minecraft:end_stone"
           },
           {
               "type": "fluid_stack",
               "amount": 250,
               "fluid": "create_enchantment_industry:experience"
           }
       ],
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "minecraft:dragon_egg"
               },
               "amount": 1
           },
		   {
			   "amount": 250,
			   "id": "create_dragons_plus:dragons_breath"
		   }
       ]
   })
   
   //Ender Mechanism
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "createmechanisms:advanced_precision_mechanism"
       },
       "loops": 4,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:ender_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "kubejs:spectral_fluid"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_ender_mechanism" },
                   { "item": "kubejs:shadow_radiance" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "kubejs:spectral_fluid"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_ender_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "minecraft:lava"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_ender_mechanism" },
                   { "item": "createmechanisms:advanced_precision_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_ender_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_ender_mechanism"
           },
           "amount": 1
       }
   })
   
   //Computing Mechanism
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "createmechanisms:ender_mechanism"
       },
       "loops": 8,
       "results": [
           {
               "chance": 0.99,
               "item": {
                   "id": "createmechanisms:computing_mechanism"
               }
           },
		   {
               "chance": 0.01,
               "item": {
                   "id": "create_enchantment_industry:super_experience_block"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:wooden_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:rubber_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:zinc_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:heat_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_computing_mechanism" },
                   { "item": "createmechanisms:advanced_precision_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_computing_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 1000,
                       "fluid": "create_dragons_plus:dragon_breath"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_computing_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_computing_mechanism"
           },
           "amount": 1
       }
   })
   
   //Advanced Precision Mechanism
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "create:precision_mechanism"
       },
       "loops": 4,
       "results": [
           {
               "chance": 92.0,
               "item": {
                   "id": "createmechanisms:advanced_precision_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "create:precision_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "createmechanisms:wooden_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "createmechanisms:zinc_mechanism"
               }
           },
           {
               "chance": 2.0,
               "item": {
                   "id": "createmechanisms:rubber_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_advanced_precision_mechanism" },
                   { "item": "createmechanisms:wooden_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_advanced_precision_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "minecraft:lava"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_advanced_precision_mechanism" },
                   { "item": "createmechanisms:zinc_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_advanced_precision_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "minecraft:lava"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_advanced_precision_mechanism" },
                   { "item": "createmechanisms:rubber_mechanism" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_advanced_precision_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_advanced_precision_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_advanced_precision_mechanism"
           },
           "amount": 1
       }
   })
   
   //Zinc Mechanism
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "minecraft:iron_block"
       },
       "loops": 3,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:zinc_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_zinc_mechanism" },
                   { "item": "create:large_cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
		   {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_zinc_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_zinc_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "minecraft:lava"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_zinc_mechanism" },
                   { "item": "create:cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_zinc_mechanism" },
                   { "item": "create:zinc_nugget" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_zinc_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_zinc_mechanism"
           },
           "amount": 1
       }
   })
   
   //Rubber Mechanism
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "createmechanisms:wooden_mechanism"
       },
       "loops": 2,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:rubber_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_rubber_mechanism" },
                   { "item": "createmechanisms:cured_rubber" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_rubber_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "minecraft:lava"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_rubber_mechanism" },
                   { "item": "create:copper_nugget" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_rubber_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_rubber_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_rubber_mechanism"
           },
           "amount": 1
       }
   })
   
   //Wooden Mechanism
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "tag": "c:stripped_woods"
       },
       "loops": 2,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:wooden_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_wooden_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_wooden_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_wooden_mechanism" },
                   { "item": "create:andesite_alloy" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_wooden_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_wooden_mechanism" },
                   { "item": "create:cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_wooden_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_wooden_mechanism" },
                   { "item": "create:large_cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_wooden_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_wooden_mechanism" },
                   { "item": "create:cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_wooden_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_wooden_mechanism" },
                   { "item": "create:large_cogwheel" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_wooden_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_wooden_mechanism"
           },
           "amount": 1
       }
   })
   
   //Bronze
   event.custom({
       "type": "create:mixing",
       "heat_requirement": "heated",
       "ingredients": [
           {
               "item": "minecraft:copper_ingot"
           },
           {
               "item": "minecraft:copper_ingot"
           },
           {
               "item": "minecraft:copper_ingot"
           },
           {
               "item": "minecraft:iron_ingot"
           }
       ],
       "results": [
           {
               "count": 4,
               "item": {
                   "id": "createmechanisms:bronze"
               }
           }
       ]
   })
   
   //Copper Saw
   event.shaped(
       Item.of('createmechanisms:copper_saw', 1), // arg 1: output
       [
           '  c',
           ' cb', // arg 2: the shape (array of strings)
           'ab '
       ],
       {
           a: '#minecraft:planks',
           b: '#c:ingots/copper',
           c: 'minecraft:stick'       }
   )
   
   //Iron Saw
   event.shaped(
       Item.of('createmechanisms:iron_saw', 1), // arg 1: output
       [
           '  c',
           ' cb', // arg 2: the shape (array of strings)
           'ab '
       ],
       {
           a: '#minecraft:planks',
           b: '#c:ingots/iron',
           c: 'minecraft:stick'       }
   )
   
   //Diamond Saw
   event.shaped(
       Item.of('createmechanisms:diamond_saw', 1), // arg 1: output
       [
           '  c',
           ' cb', // arg 2: the shape (array of strings)
           'ab '
       ],
       {
           a: '#minecraft:planks',
           b: '#c:gems/diamond',
           c: 'minecraft:stick'       }
   )
   
   //Rubber
   event.custom({
       "type": "create:mixing",
       "ingredients": [
           {
               "item": "minecraft:kelp"
           },
           {
               "item": "minecraft:kelp"
           },
           {
               "item": "minecraft:kelp"
           },
           {
               "item": "minecraft:kelp"
           },
           {
               "type": "fluid_stack",
               "amount": 250,
               "fluid": "minecraft:water"
           }
       ],
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:rubber"
               },
               "amount": 1
           }
       ]
   })
   
   //Cured Rubber
   event.custom(
       {
           "type": "minecraft:smelting",
           "category": "misc",
           "cookingtime": 200,
           "experience": 0.25,
           "ingredient": {
               "item": "createmechanisms:rubber"
           },
           "result": {
               "count": 1,
               "id": "createmechanisms:cured_rubber"
           }
       }
   )
   
   //Heat Mechanism
   event.custom({
       "type": "create:sequenced_assembly",
       "ingredient": {
           "item": "createmechanisms:bronze"
       },
       "loops": 5,
       "results": [
           {
               "chance": 1.0,
               "item": {
                   "id": "createmechanisms:heat_mechanism"
               }
           }
       ],
       "sequence": [
           {
               "type": "create:pressing",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_heat_mechanism"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_heat_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:deploying",
               "ingredients": [
                   { "item": "createmechanisms:incomplete_heat_mechanism" },
                   { "item": "minecraft:magma_block" }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_heat_mechanism"
                       }
                   }
               ]
           },
           {
               "type": "create:filling",
               "ingredients": [
                   {
                       "item": "createmechanisms:incomplete_heat_mechanism"
                   },
                   {
                       "type": "fluid_stack",
                       "amount": 200,
                       "fluid": "minecraft:lava"
                   }
               ],
               "results": [
                   {
                       "item": {
                           "id": "createmechanisms:incomplete_heat_mechanism"
                       }
                   }
               ]
           }
       ],
       "transitional_item": {
           "item": {
               "id": "createmechanisms:incomplete_heat_mechanism"
           },
           "amount": 1
       }
   })
   
})