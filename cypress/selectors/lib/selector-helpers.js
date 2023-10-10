const dataQa = (value, operator = '=') => `[data-qa${operator}"${value}"]`;

const dataId = (value, operator = '=') => `[data-id${operator}"${value}"]`;

const name = (value, operator = '=') => `[name${operator}"${value}"]`;

const type = (value, operator = '=') => `[type${operator}"${value}"]`;

const role = (value, operator = '=') => `[role${operator}"${value}"]`;

const visible = (selector) => `${selector}:visible`;

const ariaLabel = (value, operator = '=') => `[aria-label${operator}"${value}"]`;

const id = (value, operator = '=') => `[id${operator}"${value}"]`;

const forSelector = (value, operator = '=') => `[for${operator}"${value}"]`;

export { dataId, dataQa, name, type, role, visible, ariaLabel, id, forSelector };
