import React, { createElement, render } from 'react';
import { ProductCardContainer } from '../../components/Product/ProductCard';

window.React = React;

mrch && mrch.registerWidget('ProductCard', {
  render(props, node) {
    render(createElement(ProductCardContainer, props), node);
  }
});