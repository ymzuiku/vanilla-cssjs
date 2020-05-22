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

function code() {
  return (
    Date.now().toString().slice(7, 13) +
    Math.random().toString().replace(".", "").slice(2, 8)
  );
}

function css(...args: any) {
  let str = getTemplate(...args);
  const bem = "c" + code() + "-";
  const rex = new RegExp(css.bem, "g");
  str = str.replace(rex, bem);

  const ele = document.createElement("style");
  ele.textContent = str;
  ele.type = "text/css";
  ele.setAttribute("data-bem", bem);
  document.head.append(ele);

  return (...args: any) => {
    return bem + getTemplate(...args);
  };
}

css.bem = "__";

export default css;
