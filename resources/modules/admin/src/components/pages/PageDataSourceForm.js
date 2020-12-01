import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Resource from "../../../../editor/src/js/classes/Resource";
import AltrpSelect from "../altrp-select/AltrpSelect";

class PageDataSourceForm extends Component {
  state = {
    source_id: '',
    alias: '',
    priority: 100,
    parameters: '',
    dataSourceOptions: [],
    ...this.props.dataSource
  };

  changeHandler = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  async componentDidMount() {
    const resource = new Resource({ route: '/admin/ajax/data_sources' });
    const { data_sources } = await resource.getAll();
    console.log(data_sources);
    this.setState({ dataSourceOptions: data_sources })
  }

  submitHandler = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const resource = new Resource({ route: `/admin/ajax/page_data_sources` });
    const data = { ...this.state };
    delete data.dataSourceOptions;
    if (this.props.dataSource) {
        resource.put(data.id, data);
    } else {
      resource.post({ page_id: id, ...data });
    }
    this.props.updateHandler();
  };

  render() {
    let { source_id, alias, priority, parameters, dataSourceOptions } = this.state;
    dataSourceOptions = dataSourceOptions.map(source=>({value:source.id, label:source.title || source.name}));
    console.log(dataSourceOptions);
    return <form className="admin-form" onSubmit={this.submitHandler}>
      <div className="form-group">
        <label htmlFor="source_id">Data Source</label>
        {/*<select id="source_id"*/}
          {/*name="source_id"*/}
          {/*value={source_id}*/}
          {/*onChange={this.changeHandler}*/}
          {/*className="form-control"*/}
        {/*>*/}
          {/*<option value="" />*/}
          {/*{dataSourceOptions.map(({ id, name }) => <option value={id} key={id}>{name}</option>)}*/}
        {/*</select>*/}
        <AltrpSelect options={dataSourceOptions}
                     onChange={({value})=>{
                       this.setState(state => ({...state, source_id: value}));
                     }}
                     value={dataSourceOptions.find(({value})=>value === source_id)}/>
      </div>

      <div className="form-group">
        <label htmlFor="alias">Alias</label>
        <input type="text" id="alias" required
          name="alias"
          value={alias}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <input type="number" id="priority" required
          name="priority"
          value={priority}
          onChange={this.changeHandler}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Parameters
            <textarea  name="parameters"
            value={parameters || ''}
            onChange={this.changeHandler}
            className="form-control"
          />
        </label>
      </div>

      <div className="btn__wrapper">
        <button className="btn btn_success" type="submit">Add</button>
      </div>
    </form>;
  }
}

export default withRouter(PageDataSourceForm);