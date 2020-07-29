/**
 * @param {string} text
 * @return {string}
 */

// 直接正则匹配
var entityParser = function (text) {
  let regs = [
    {
      reg: /&quot;/g,
      value: '"'
    },
    {
      reg: /&gt;/g,
      value: '>'
    },
    {
      reg: /&lt;/g,
      value: '<'
    },
    {
      reg: /&frasl;/g,
      value: '/'
    },
    {
      reg: /&apos;/g,
      value: "'"
    },
    {
      reg: /&amp;/g,
      value: '&'
    },
  ];

  for (let curr of regs) {
    text = text.replace(curr.reg, curr.value);
  }

  return text;
};