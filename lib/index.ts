const css = (template: any, ...args: any[]) => {
  let text = '';
  if (typeof template === 'string') {
    text = template;
  } else {
    template.forEach((v: any, i: number) => {
      text += v;
      if (args[i]) {
        text += args[i];
      }
    });
  }

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

css.class = <T>(target: T, className: string, bem?: Function): T => {
  if (bem) {
    className = bem(className);
  }
  (target as any).setAttribute('class', className);

  return target;
};

css.bem = (bem = 'bem-') => {
  const r = `c${Date.now()
    .toString(32)
    .slice(4)}${Math.random()
    .toString(32)
    .slice(2)}`;

  return (text: string) => {
    const exp = new RegExp(bem, 'g');

    text = text.replace(exp, `${r}-`);
    return text;
  };
};

export default css;
