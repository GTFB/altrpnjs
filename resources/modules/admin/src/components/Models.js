import React, { Component } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.scss';
import { Link } from 'react-router-dom'

import AdminTable from "./AdminTable";
import Pagination from "./Pagination";
import Resource from "../../../editor/src/js/classes/Resource";

const columnsModel = [
  {
    name: 'name',
    //name: 'title', todo: сменить, когда будет title
    title: 'Title',
    url: true,
    editUrl: true,
    tag: 'Link'
  },
  // {
  //   name: 'name',
  //   title: 'Name'
  // },
  {
    name: 'description',
    title: 'Description'
  },
  {
    name: 'updated_at',
    title: 'Updated At'
  }
];
const columnsDataSource = [
  {
    name: 'title',
    title: 'Title',
    url: true,
    editUrl: true,
    tag: 'Link'
  },
  {
    name: 'name',
    title: 'Name'
  },
  {
    name: 'route',
    title: 'Route'
  },
  {
    name: 'type',
    title: 'Type'
  }
];
const initPaginationProps = {
  pageCount: 1,
  currentPage: 1,
};

const mockedDataSources = [
  {
    id: 1,
    name: 'test1',
    title: 'Test1',
    route: 'https://test1',
    type: ['Get Queried', 'create', 'read', 'update', 'delete']
  },
  {
    id: 2,
    name: 'test2',
    title: 'Test2',
    route: 'https://test2',
    type: ['resource', 'Get Queried', 'create', 'read', 'update', 'delete']
  },
  {
    id: 3,
    name: 'test3',
    title: 'Test3',
    route: 'https://test3',
    type: ['Get Queried', 'create', 'read', 'options']
  },
];

export default class Models extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      modelsPagination: initPaginationProps,
      dataSourcesPagination: initPaginationProps,      
      models: [],
      dataSources: [],
      // dataSources: mockedDataSources
    };
    this.switchTab = this.switchTab.bind(this);
    this.changePage = this.changePage.bind(this);
    this.modelsResource = new Resource({route: '/admin/ajax/models'});
  }

  switchTab(activeTab) {
    this.setState(state => ({ ...state, activeTab }))
  }

  changePage(currentPage, pagination) {
    this.setState(state => ({ ...state, [pagination]: { ...state[pagination], currentPage} }));
  }

  async componentDidMount() {
    // get: /admin/ajax/models .then(models => {
    //   this.setState({models});
    // });
    let models = await this.modelsResource.getAll();
    models = models.models;
    this.setState(state=>({
        ...state,
        models
    }))
  }

  render() {
    const { activeTab, models, dataSources, modelsPagination, dataSourcesPagination} = this.state;

    return <div className="admin-settings admin-page">
      <div className="admin-heading">
        <div className="admin-breadcrumbs">
          <a className="admin-breadcrumbs__link" href="#">Tables</a>
          <span className="admin-breadcrumbs__separator">/</span>
          <span className="admin-breadcrumbs__current">{activeTab === 0 ? 'All Models' : 'All Data Sources'}</span>
        </div>
        <Link className="btn" to={`/admin/tables/${activeTab === 0 ? 'models' : 'data-sources'}/add`}>Add New</Link>
      </div>
      <div className="admin-content">
        <Tabs selectedIndex={activeTab} onSelect={this.switchTab}>
          <TabList className="nav nav-pills admin-pills">
            <Tab>
              Models
            </Tab>
            <Tab>
              Data Sources
            </Tab>
          </TabList>
          <TabPanel>
            {/* TODO: что делать с колoнкой с чекбоксами? */}
            <AdminTable
              columns={columnsModel}
              quickActions={[{ tag: 'a', props: {
                  href: '/admin/editor?template_id=:id',
                  target: '_blank',
                  // className: ''
                },
                title: 'Edit'
              }, {
                tag: 'button',
                route: '/admin/ajax/templates/:id/reviews',
                method: 'delete',
                // className: ''
                title: 'Clear History'
              }, {
                tag: 'button',
                route: '/admin/ajax/templates/:id',
                method: 'delete',
                confirm: 'Are You Sure?',
                after: () => this.updateTemplates(this.state.currentPage, this.state.activeTemplateArea),
                className: 'quick-action-menu__item_danger',
                title: 'Trash'
              }]}
              rows={models.map(model => ({ 
                ...model, 
                editUrl: '/admin/tables/models/edit/' + model.id
              }))}
            />
            <Pagination pageCount={modelsPagination.pageCount}
              currentPage={modelsPagination.currentPage}
              changePage={currentPage => this.changePage(currentPage, "modelsPagination")}
              itemsCount={models.length}
            />
          </TabPanel>
          <TabPanel>
            <AdminTable
              columns={columnsDataSource}
              rows={dataSources.map(dataSource => ({
                ...dataSource,
                type: dataSource.type.join(', '),
                editUrl: '/admin/data-source/edit/' + dataSource.id
              }))}
            />
            <Pagination pageCount={dataSourcesPagination.pageCount}
              currentPage={dataSourcesPagination.currentPage}
              changePage={currentPage => this.changePage(currentPage, "dataSourcesPagination")}
              itemsCount={models.length}
            />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  }
}
