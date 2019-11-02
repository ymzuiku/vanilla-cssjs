if (!(window as any).__css_bem) {
  (window as any).__css_bem = 1;
}

const getTemplate = (...args: any[]) => {
  const [template, ...param] = args;

  let text = '';
  if (typeof template === 'string') {
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

const css = (...args: any[]) => {
  let text = getTemplate(...args);

  return (bem?: Function) => {
    const ele = document.createElement('style');
    if (bem) {
      text = bem(text);
    }
    ele.type = 'text/css';
    ele.textContent = text;
    document.head.appendChild(ele);
  };
};

css.bem = (reg = 'bem-', bem?: string) => {
  if (!bem) {
    (window as any).__css_bem += 1;
    bem = `${(window as any).__css_bem}-`;
  }

  const r = `bem${bem}`;

  return (...args: any[]) => {
    const exp = new RegExp(reg, 'g');
    let text = getTemplate(...args);
    text = text.replace(exp, r);
    return text;
  };
};

export default css;
