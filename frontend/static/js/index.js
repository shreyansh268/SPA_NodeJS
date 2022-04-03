const navigateTo = url =>{ history.pushState(null, null, url);
router();
};

const router = async() => {
const routes = [
    {path:"/", view: () => console.log("Viewing Dashboard")},
    {path:"/posts", view: () => console.log("Viewing Posts")},
    {path:"/settings", view: () => console.log("Viewing Settings")},

];

//Test each route for potential matches
const potentialMatches = routes.map(route => {
    return {
        route:route,
        isMatch: location.pathname === route.path
    };
});

console.log(potentialMatches);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", ()=> {
    document.body.addEventListener("click", e =>{
        if(e.target.matches("[data-link")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});