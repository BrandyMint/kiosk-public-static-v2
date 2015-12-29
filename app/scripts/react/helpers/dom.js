export const getScrollTop = (elt) => (
  elt.scrollY != null ? elt.scrollY : elt.scrollTop
);

export const getEltHeight = (elt) => ($(elt).height());

export const getEltWidth = (elt) => ($(elt).width());

export const setScrollTop = (elt, nextStep) => {
  const step = nextStep <= 0 ? 0 : nextStep;

  elt.scrollTo ? elt.scrollTo(0, step) : elt.scrollTop = step;

  return step;
};

export const getElt = (selector) => (
  selector === 'window' ? window : document.querySelector(selector)
);