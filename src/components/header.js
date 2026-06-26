export function header(title) {
  return `
    <header class="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div class="max-w-6xl mx-auto flex items-center justify-between p-4">

        <div class="flex items-center gap-3">

          <img
            src="/logo.png"
            class="w-10 h-10 rounded-xl"
            alt="SchoolChat Logo">

          <div>

            <h1 class="font-bold text-lg">
              SchoolChat
            </h1>

            <p class="text-xs text-white/60">
              ${title}
            </p>

          </div>

        </div>

      </div>
    </header>
  `;
}
