// Example of format
// properties: [{
//   id: 123,
//   type: 'PropertyColor',
//   title: 'Цвет',
//   items: [
//     { title: 'Розовый', color: '#333333', value: 123 },
//     { title: 'Синий в горошек', color: '#123212', image_url: '../images/15927_src.jpg', value: 456 }
//   ]
// }]
//
// variants: [{
//   article: 'Артикул 12', 
//   good_global_id: 'qweqwewqeq',
//   image_url: 'htttp://...product.png', 
//   quantity: 12,
//   attributes: { 345: 12, 123: 456 }
// }]
//
// values: { 123: 456 }
//
// Returns
// {
//   123: [
//     { value: 123, title: 'Розовый', color: '#333333', disabled: false },
//     { value: 456, title: 'Синий в горошек', color: '#123212', image_url: '../images/15927_src.jpg', disabled: true },
//     { value: 789, title: 'Серо-синий', color: '#6c7a89', disabled: false }
//   ]
// }

export default function getOptions(properties, variants, filter) {
  return properties.reduce((previous, property) => {
    previous[property.id] = getOptionsForProperty(property, variants, filter);
    return previous;
  }, {});
}

function getOptionsForProperty(property, variants, filter) {
  const possibleVariants = variants.filter((variant) => {
    let result = true;

    for (let attribute in variant.attributes) {
      if (variant.attributes[attribute] !== filter[attribute] && filter[attribute] != null) {
        result = false;
      }
    }

    return result;
  });
  const enabledValues = getEnabledValues(property.id, possibleVariants, filter);

  return property.items.map((item) => ({
    ...item,
    disabled: enabledValues.indexOf(item.value) == -1
  }));
}

function getEnabledValues(propertyID, variants, filter) {
  return variants.reduce((previous, variant) => {
    if (isVariantFiltered(variant.attributes, filter)) {
      const value = variant.attributes[propertyID];
      previous.push(value);
    }
    return previous;
  }, []);
}

function isVariantFiltered(attributes, filter) {
  let result = true;

  Object.keys(filter).forEach((key) => {
    if (filter[key] != null && filter[key] != attributes[key]) {
      result = false;
    }
  });

  return result;
}