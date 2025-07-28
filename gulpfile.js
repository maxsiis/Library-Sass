const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyle() {
  return src("MaxLibrary/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["MaxLibrary/**/*.scss"], buildStyle);
}

// Экспортируем задачи
exports.build = buildStyle; // если нужно отдельно запускать компиляцию
exports.watch = watchTask; // если нужно отдельно запускать слежение

// Задача по умолчанию (запускает сборку + слежение)
exports.default = series(buildStyle, watchTask); // ✅ исправлено: `watchTask`, а не `watch`
