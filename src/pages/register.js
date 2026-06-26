import { navigate } from "../router/router";

export function registerPage(){

document.querySelector("#app").innerHTML=`

<div class="min-h-screen flex items-center justify-center p-6">

<div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md">

<h1 class="text-3xl font-bold text-center">

Register

</h1>

<p class="text-center mt-2 text-white/70">

Join SchoolChat

</p>

<button

id="loginBtn"

class="w-full mt-8 bg-sky-600 py-3 rounded-xl">

Already have an account?

</button>

</div>

</div>

`;

document
.getElementById("loginBtn")
.onclick=()=>navigate("login");

}
