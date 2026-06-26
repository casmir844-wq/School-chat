const routes = {};

export function registerRoute(name, renderFunction) {
    routes[name] = renderFunction;
}

export function navigate(route) {
    if (!routes[route]) {
        console.error(`Route "${route}" not found.`);
        return;
    }

    document.querySelector("#app").innerHTML = "";
    routes[route]();
}
