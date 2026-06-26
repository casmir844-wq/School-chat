import { navigate } from "../router/router";

export function loginPage() {

document.querySelector("#app").innerHTML = `

<div class="min-h-screen flex items-center justify-center p-6">

<div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md">

<h1 class="text-3xl font-bold text-center">
Login
</h1>

<p class="text-center mt-2 text-white/70">
Welcome back.
</p>

<button
id="registerBtn"
class="w-full mt-8 bg-teal-600 py-3 rounded-xl">

Create Account

</button>

</div>

</div>

`;

document
.getElementById("registerBtn")
.onclick=()=>navigate("register");

}
