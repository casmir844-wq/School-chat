import "./style.css";
import app from "./firebase/firebase.js";

console.log("✅ Firebase connected:", app);

document.querySelector("#app").innerHTML = `
<div class="min-h-screen flex items-center justify-center p-6">

  <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 w-full max-w-md shadow-2xl">

    <h1 class="text-4xl font-bold text-center">
      SchoolChat
    </h1>

    <p class="text-center mt-4 text-white/70">
      Firebase Connected 🔥
    </p>

  </div>

</div>
`;
