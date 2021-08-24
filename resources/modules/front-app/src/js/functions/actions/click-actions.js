import elementSearch from '../../helpers/element-search';
import { v4 } from 'uuid';

const CLICK_EXCLUDE_TAG_NAMES = [
  // 'input',todo: выяснить нужно ли исключение
  // 'a',
  // 'button',
  // 'textarea',
  // 'select',
];

const ACTIONS_CACHE = (window.altrp.ACTIONS_CACHE = window.altrp.ACTIONS_CACHE || {})
/**
 *
 * @param {PointerEvent} e
 */
export default function clickActions(e){
  let html_element = e.target;
  if(CLICK_EXCLUDE_TAG_NAMES.indexOf(e.target.tagName.toLowerCase()) >=0){
    return
  }
  let actions
  let element
  if(e.target.dataset.elementUuid && _.get(ACTIONS_CACHE, `clickActions.${e.target.dataset.elementUuid}`)){
    actions = _.get(ACTIONS_CACHE, `clickActions.${e.target.dataset.elementUuid}.actions`);
    element = _.get(ACTIONS_CACHE, `clickActions.${e.target.dataset.elementUuid}.element`);
  } else {
    while ((html_element = html_element?.closest('[data-altrp-wrapper-click-actions]'))){
      const _el = elementSearch(html_element?.dataset?.altrpWrapperClickActions)
      if(_el && ! _.isEmpty(_el.getSettings('wrapper_click_actions'))){
        actions = _el.getSettings('wrapper_click_actions')
        element = _el
        e.target.dataset.elementUuid = v4();
        _.set(ACTIONS_CACHE, `clickActions.${e.target.dataset.elementUuid}`, {actions, element})
        break;
      }
      html_element = html_element.parentElement
    }
  }
  if(! actions){
    return;
  }
  e.preventDefault();
  import(/* webpackChunkName: 'ActionsManager' */'../../classes/modules/ActionsManager').then(()=>{
    window.actionsManager.callAllWidgetActions(
      element.getIdForAction(),
      'wrapper_click_actions',
      actions,
      element
    )
  })
}
