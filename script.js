async function loadPage(url) {
  const app = document.getElementById("app");

  app.classList.add("zoom-out");

  await new Promise((r) => setTimeout(r, 700));

  const res = await fetch(url);
  const html = await res.text();

  app.innerHTML = html;
  history.pushState({}, "", url);

  app.classList.remove("zoom-out");
}
