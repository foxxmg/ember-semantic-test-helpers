import AmbiguousLabel from './errors/ambiguous-label';
import MissingObject from './errors/missing-object';
import { buttonQuery, formControlQuery } from './dom/selectors'
import findByAria from './dom/find-by-aria';


export function findButton(labelText){
  return findObject(buttonQuery, labelText, 'button');
}

export function findButtons(labelText){
  return findObjects(buttonQuery, labelText, 'button');
}

export function findControl(labelText) {
  return findObject(formControlQuery, labelText, 'control');
}

export default function findControls(labelText) {
  return findObjects(formControlQuery, labelText, 'control');
}

export function findObject(selector, labelText, type) {
  try {
    let objects = findObjects(selector, labelText)
    if(objects.length > 1){
      throw new AmbiguousLabel(`Multiple ${type} labelled ${labelText} where found`)
    }
    return objects[0]
  } catch(e){
    if(e instanceof MissingObject){
      throw new MissingObject(`Could not find ${type} labelled '${labelText}'`)
    }
  }
}

export function findObjects(selector, labelText, type='object') {
  let objects = findByAria(selector, labelText)
  if(objects.length == 0){
    throw new MissingObject(`No ${type} labelled ${labelText} found`);
  }
  return objects;
}