import React from "react";
import '../../../sass/altrp-pagination.scss';
import './altrp-posts.scss'
import AltrpQueryComponent from "../altrp-query-component/altrp-query-component";
import templateLoader from "../../classes/modules/TemplateLoader"
import frontElementsFabric from "../../../../../front-app/src/js/classes/FrontElementsFabric"
import AltrpModel from "../../classes/AltrpModel";

class AltrpPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: _.isArray(props.data) ?  props.data : [],
      simpleTemplate: '',
      simpleTemplateId : null
    }
  }

  /**
   * Компонент загрузился
   */
  async componentDidMount() {
    const{settings} = this.props;
    let simpleTemplateId = _.get(settings, 'posts_card_template');
    if(simpleTemplateId){
      if(! simpleTemplateId){
        return;
      }
      let template = await templateLoader.loadParsedTemplate(simpleTemplateId);
      this.setState(state=>({...state, simpleTemplate:template, simpleTemplateId}))
    }
  }

  /**
   * Компонент обновился
   */
  async componentDidUpdate(prevProps) {
    const{settings} = this.props;
    const{simpleTemplateId} = this.state;
    const newSimpleTemplateId = _.get(settings, 'posts_card_template', simpleTemplateId);
    if(! _.isEqual(prevProps.data, this.props.data)){
      this.setState(state =>({...state, posts: this.props.data}));
    }
    if(newSimpleTemplateId !== simpleTemplateId){
      if(! newSimpleTemplateId){
        return;
      }
      let template = await templateLoader.loadParsedTemplate(newSimpleTemplateId);
      this.setState(state=>({...state, simpleTemplate:template, simpleTemplateId: newSimpleTemplateId}))
    }
  }

  /**
   * Отрисовывает отдельную карточку
   * @param {integer} idx - индекс в массиве записей
   */
  renderPost(idx){
    let post = _.cloneDeep(this.state.posts[idx]);
    let PostContentComponent = post.component || <h2>{post.title || post.id || ''}</h2>;
    if(this.state.simpleTemplate){
      let template = frontElementsFabric.cloneElement(this.state.simpleTemplate);
      template.setCardModel(new AltrpModel(post));
      PostContentComponent = React.createElement(template.componentClass,
        {
          element: template,
          children: template.children
        });
    }
    return <div className="altrp-post" key={post.id + Math.random()}>{PostContentComponent}</div>
  }

  render() {

  return<div className="altrp-posts">
    {this.state.posts.map((p, idx)=>{
      return this.renderPost(idx);
    })}
  </div>
  }
}

export default (props) => {
  return <AltrpQueryComponent {...props}><AltrpPosts/></AltrpQueryComponent>
}