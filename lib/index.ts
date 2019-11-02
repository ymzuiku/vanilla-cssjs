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

  return (bem?: string) => {
    const ele = document.createElement('style');
    if (bem) {
      text = text.replace(/(\-bem\-)/g, `${bem}-`);
    }
    ele.type = 'text/css';
    ele.textContent = text;
    console.log(text);
    document.head.appendChild(ele);
  };
};

css.class = <T>(target: T, className: string, bem?: string): T => {
  if (bem) {
    className = className.replace(/(\-bem\-)/g, `${bem}-`);
  }
  (target as any).setAttribute('class', className);

  return target;
};

css.bem = () => {
  return `bem${Date.now().toString(32)}${Math.random()
    .toString(32)
    .slice(2)}`;
};

export default css;
