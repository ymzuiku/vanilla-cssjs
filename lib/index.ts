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

function css(...args: any) {
  return (bemStr: string) => {
    let str = getTemplate(...args);
    const pix = bemStr + "-";
    const rex = new RegExp("._", "g");
    str = str.replace(rex, "." + pix);

    const bem = (...args: any) => {
      return pix + getTemplate(...args);
    };
    bem.init = () => {
      if (document.head.querySelector("." + pix)) {
        return;
      }
      const ele = document.createElement("style");
      ele.textContent = str;
      ele.type = "text/css";
      ele.className = pix;
      document.head.append(ele);
    };

    return bem;
  };
}

export default css;
