// kubejs/server_scripts/always_enable_cheats.js

ServerEvents.loaded(event => {
	
  // Force cheats (commands) on for this world
  event.server.properties.allowCommands = true
  event.server.saveProperties()
  
})
