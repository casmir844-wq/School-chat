import { navigate } from "../router/router";

export function registerPage() {
  document.querySelector("#app").innerHTML = `
<div class="min-h-screen flex items-center justify-center p-6">

<div class="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">

<div class="flex justify-center mb-6">
<img
src="/images/default-avatar.png"
class="w-24 h-24 rounded-full border-4 border-teal-500 object-cover"
alt="Avatar">
</div>

<h1 class="text-3xl font-bold text-center">
Create Account
</h1>

<p class="text-center text-white/70 mt-2 mb-6">
Join SchoolChat
</p>

<form id="registerForm" class="space-y-4">

<input
id="username"
type="text"
placeholder="Username"
class="w-full p-3 rounded-xl bg-white/20 outline-none placeholder-white/60">

<input
id="fullname"
type="text"
placeholder="Full Name"
class="w-full p-3 rounded-xl bg-white/20 outline-none placeholder-white/60">

<input
id="email"
type="email"
placeholder="Email"
class="w-full p-3 rounded-xl bg-white/20 outline-none placeholder-white/60">

<input
id="password"
type="password"
placeholder="Password"
class="w-full p-3 rounded-xl bg-white/20 outline-none placeholder-white/60">

<input
id="confirmPassword"
type="password"
placeholder="Confirm Password"
class="w-full p-3 rounded-xl bg-white/20 outline-none placeholder-white/60">

<select
id="gender"
class="w-full p-3 rounded-xl bg-white/20 outline-none">

<option value="">Gender</option>
<option>Male</option>
<option>Female</option>

</select>

<input
id="dob"
type="date"
class="w-full p-3 rounded-xl bg-white/20 outline-none">

<select
id="country"
class="w-full p-3 rounded-xl bg-white/20 outline-none">

<option value="">Select Country</option>
<option>Nigeria</option>
<option>Ghana</option>
<option>Kenya</option>
<option>South Africa</option>

</select>

<textarea
id="bio"
placeholder="Short Bio"
rows="3"
class="w-full p-3 rounded-xl bg-white/20 outline-none placeholder-white/60"></textarea>

<button
type="submit"
class="w-full bg-teal-600 hover:bg-teal-700 rounded-xl py-3 font-semibold transition">

Create Account

</button>

</form>

<p class="text-center mt-6">

<button
id="loginBtn"
class="text-teal-300">

Already have an account?

</button>

</p>

</div>

</div>
`;

  document
    .getElementById("loginBtn")
    .onclick = () => navigate("login");

  document
    .getElementById("registerForm")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      alert("Registration coming next 🔥");
    });
}
