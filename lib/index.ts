const getTemplate = (...args: any[]) => {
  const [template, ...param] = args;

  let text = "";
  if (typeof template === "string") {
    text = template;
  } else if (template) {
    template.forEach((v: any, i: number) => {
      text += v;
      if (param[i]) {
        text += param[i];
      }
    });
  }
  return text;
};

function hash() {
  if (!(window as any).__cssin_prefix) {
    (window as any).__cssin_prefix = 1;
  }
  (window as any).__cssin_prefix += 1;
  return (window as any).__cssin_prefix;
}

const css = (...args: any[]) => {
  const prefix = `bem-${hash()}-`;
  const exp = new RegExp("._", "g");
  const text = getTemplate(...args).replace(exp, "." + prefix);

  const ele = document.createElement("style");
  ele.type = "text/css";
  ele.setAttribute("data-bem", prefix);
  ele.textContent = text;
  document.head.appendChild(ele);

  return function(...args: any[]) {
    let text = " " + getTemplate(...args);
    const exp = new RegExp(" _", "g");
    text = text.replace(exp, " " + prefix);
    return text.replace(' ', '');
  };
};

export default css;
