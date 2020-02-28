import BaseModule from './BaseModule';

class ElementsFabric extends BaseModule{
  parseData(object){
    let children = [];
    const elementClasses = window.elementClasses;
    /**
     * @member {BaseElement} element
     * */
    let element = new (elementClasses.getElementClass(object.name));
    if( object.data.children && object.data.children.length ){
      for( let child of object.data.children){
        children.push( this.parseData( child ) );
      }
    }
    element.id = object.id;
    element.children = children;
    return element;
  }
}

export default ElementsFabric;