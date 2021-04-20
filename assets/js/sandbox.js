'use strict';
const mySet = new Set([1, 2, 3, 4, 5, 6, 7]);
const nums1 = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, ];
const nums2 = [4, 5, 6, 6, 57, 88, 32, 2, 1, 1, 1, 1, 1]
const unique = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const monitor = {
  sizes: {
    height: {
      value: 20,
      scale: 'cm',
    },
    width: {
      value: 50,
      scale: 'cm',
    },
  },
  model: 'Samsung',
  brightness: 200,
  contrast: 100,
  color: 'black',
  dpi: 250,
  resolution: '4k',
}
const [first, second, third, ...restOfNum] = nums;
console.log(first, second, third, restOfNum);

function getMonitorInfo({
  color = 'Black',
  dpi = '100',
  sizes: {
    height: {
      value: heightValue,
      scale: heightScale,
    },
    width: {
      value: widthValue,
      scale: widthScale,
    },
  }
}) {
  return `Color: ${color}\nDPI: ${dpi}\nWidth: ${widthValue} ${widthScale}\nHeight: ${heightValue} ${heightScale}`;
}