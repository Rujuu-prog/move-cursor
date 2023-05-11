export const loadFont = () => {
  const config = {
    kitId: "fbm7zqm",
    scriptTimeout: 3000,
    async: true,
  };

  const h = document.documentElement;
  const t = setTimeout(() => {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout);

  const tk = document.createElement("script");
  let f = false;
  const s = document.getElementsByTagName("script")[0];

  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;

  tk.onload = function (): any {
    if (f) return;
    f = true;
    clearTimeout(t);
    try {
      // @ts-ignore: 'Typekit' is not defined
      Typekit.load(config);
    } catch (e) {
      console.error(e);
    }
  };

  s.parentNode?.insertBefore(tk, s);
};
