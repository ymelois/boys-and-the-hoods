function setPaused(server, paused) {
    const value = paused ? "false" : "true";
    server.runCommandSilent(`gamerule doDaylightCycle ${value}`);
    server.runCommandSilent(`gamerule doWeatherCycle ${value}`);
}

ServerEvents.loaded((event) => {
    setPaused(event.server, true);
});

PlayerEvents.loggedIn((event) => {
    setPaused(event.server, false);
});

PlayerEvents.loggedOut((event) => {
    const remaining = event.server.playerList.players.size() - 1;
    if (remaining <= 0) {
        setPaused(event.server, true);
    }
});
