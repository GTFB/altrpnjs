console.log('FIRST SCRIPT: ',performance.now());
import './sass/front-style.scss';
window.sSr = false;

/**
 * Параллельно загружаем все необходимые модули
 */

import (/* webpackChunkName: 'FrontElementsManager' */'./js/classes/FrontElementsManager').then(module=>{
  import (/* webpackChunkName: 'FrontElementsFabric' */'./js/classes/FrontElementsFabric').then(module=>{
    console.log('LOAD FrontElementsFabric: ',performance.now());
    loadingCallback();
  });
  return window.frontElementsManager.loadComponents();
}).then(async components=>{
  window.frontElementsManager.loadNotUsedComponent();
  console.log('LOAD FrontElementsManager: ',performance.now());
  loadingCallback();
});
import (/* webpackChunkName: 'elementDecorator' */'./js/decorators/front-element-component').then(module=>{
  window.elementDecorator = module.default;
  console.log('LOAD elementDecorator: ',performance.now());
  loadingCallback();
});
import (/* webpackChunkName: 'React' */'react').then(module=>{
  window.React = module.default;
  window.Component = module.Component;
  console.log('LOAD React: ',performance.now());
  loadingCallback();
});
import (/* webpackChunkName: 'FrontApp' */'./FrontApp').then(module=>{
  window.FrontApp = module.default;
  console.log('LOAD FrontApp: ',performance.now());
  loadingCallback();
});
import (/* webpackChunkName: 'ReactDOM' */'react-dom').then(module=>{
  window.ReactDOM = module.default;
  console.log('LOAD ReactDOM: ',performance.now());
  loadingCallback();
});
import (/* webpackChunkName: 'ElementWrapper' */'./js/components/ElementWrapper').then(module=>{
  window.ElementWrapper = module.default;
  console.log('LOAD ElementWrapper: ',performance.now());
  loadingCallback();
});

import (/* webpackChunkName: 'FormsManager' */'../../editor/src/js/classes/modules/FormsManager.js').then(module=>{
  console.log('LOAD FormsManager: ',performance.now());
  loadingCallback();
});

/**
 * Рендерим главный компонент после загрузки основных модулей
 */
function loadingCallback(){
  if(window.React
      && window.Component
      && window.ReactDOM
      && window.frontElementsFabric
      && window.frontElementsManager
      && window.frontElementsManager.componentsIsLoaded()
      && window.FrontApp
      && window.elementDecorator
      && window.ElementWrapper
      && window.formsManager
  ){
    function renderAltrp(){
      ReactDOM.render(<FrontApp />, document.getElementById('front-app'), function (){
        window.removeEventListener('touchstart', renderAltrp);
        window.removeEventListener('mouseover', renderAltrp);
      });
    }
    if(window.ALTRP_LOAD_BY_USER){
      window.addEventListener('mouseover', renderAltrp);
      window.addEventListener('touchstart', renderAltrp);
    } else {
      renderAltrp();
    }
  }
}
window.stylesModulePromise = new Promise(function(resolve) {
  window.stylesModuleResolve = resolve;
});

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log(
    '%cWelcome to Altrp Front App',
    'color: blue; font-size: 24px; font-weight: 900;'
  );
}

(async function(){
  import ('./installing');

  import('../../editor/src/js/classes/modules/IconsManager').then(
      IconsManager => {
        window.iconsManager = new IconsManager.default();
      }
  );
  // import('./FrontApp').then(FrontApp => {
  //   FrontApp = FrontApp.default;
  //   ReactDOM.render(<FrontApp />, document.getElementById('front-app'));
  // });
  let _token = await fetch('/ajax/_token', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res=>{
    if (res.ok === false) {
      return Promise.reject({res: res.text(), status: res.status});
    }
    return res.json();
  });
  if(_token.success){
    window._token = _token._token;
  }
})();

/**
 * Регистрируем сервис-воркеры
 */

let filename = '/front-app.sw.js';

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  navigator.serviceWorker.register(filename, {scope: '/'});
}
