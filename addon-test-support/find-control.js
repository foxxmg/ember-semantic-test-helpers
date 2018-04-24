import sharedFind from './utils/shared-find';

let inputs = [
  'input',
  'textarea',
  '[role="slider"]',
  '[role="spinbutton"]',
  '[role="textbox"]',
  '[contenteditable="true"]',
]

let toggles = [
  '[role="checkbox"]',
]

let selectables = [
  'select',
  '[role="listbox"]',
  '[role="radiogroup"]',
]

let controlSelector = [inputs.join(','), toggles.join(','), selectables.join(',')].join(',');

export default async function (labelText) {
  return await sharedFind(controlSelector, labelText, 'control');
}
