ServerEvents.recipes((event) => {
    event.remove({ mod: "quark", not: { id: "quark:tools/crafting/trowel" } });
});
