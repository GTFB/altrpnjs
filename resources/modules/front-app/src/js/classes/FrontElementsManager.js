class FrontElementsManager {
  constructor() {
    //список компонентов

    this.ELEMENTS = [
      {
        name: "root-element",
        import: async () => {
          return await import(
            /* webpackChunkName: 'RootComponent' */ "../../../../editor/src/js/components/RootComponent"
          );
        }
      },
      {
        name: "heading",
        import: async () => {
          return await import(
            /* webpackChunkName: 'HeadingWidget' */ "../../../../editor/src/js/components/widgets/HeadingWidget"
          );
        }
      },
      {
        name: "section",
        import: async () => {
          return await import(
            /* webpackChunkName: 'SectionComponent' */ "../../../../editor/src/js/components/SectionComponent"
          );
        }
      },
      {
        name: "section_widget",
        import: async () => {
          return await import(
            /* webpackChunkName: 'SectionComponent' */ "../../../../editor/src/js/components/SectionComponent"
          );
        }
      },
      {
        name: "column",
        import: async () => {
          return await import(
            /* webpackChunkName: 'ColumnComponent' */ "../../../../editor/src/js/components/ColumnComponent"
          );
        }
      },
      {
        name: "input",
        import: async () => {
          return await import(
            /* webpackChunkName: 'InputWidget' */ "../../../../editor/src/js/components/widgets/InputWidget"
          );
        }
      },
      {
        name: "button",
        import: async () => {
          return await import(
            /* webpackChunkName: 'ButtonWidget' */ "../../../../editor/src/js/components/widgets/ButtonWidget"
          );
        }
      },
      {
        name: "breadcrumbs",
        import: async () => {
          return await import(
            /* webpackChunkName: 'BreadcrumbsWidget' */ "../../../../editor/src/js/components/widgets/BreadcrumbsWidget"
          );
        }
      },
      {
        name: "text",
        import: async () => {
          return await import(
            /* webpackChunkName: 'TextWidget' */ "../../../../editor/src/js/components/widgets/TextWidget"
          );
        }
      },
      {
        name: "image",
        import: async () => {
          return await import(
            /* webpackChunkName: 'ImageWidget' */ "../../../../editor/src/js/components/widgets/ImageWidget"
          );
        }
      },
      {
        name: "table",
        import: async () => {
          return await import(
            /* webpackChunkName: 'TableWidget' */ "../../../../editor/src/js/components/widgets/TableWidget"
          );
        }
      },
      {
        name: "posts",
        import: async () => {
          return await import(
            /* webpackChunkName: 'PostsWidget' */ "../../../../editor/src/js/components/widgets/PostsWidget"
          );
        }
      },
      {
        name: "nav",
        import: async () => {
          return await import(
            /* webpackChunkName: 'NavWidget' */ "../../../../editor/src/js/components/widgets/NavWidget"
          );
        }
      },
      {
        name: "divider",
        import: async () => {
          return await import(
            /* webpackChunkName: 'DividerWidget' */ "../../../../editor/src/js/components/widgets/DividerWidget"
          );
        }
      },
      {
        name: "tabs",
        import: async () => {
          return await import(
            /* webpackChunkName: 'TabsWidget' */ "../../../../editor/src/js/components/widgets/TabsWidget"
          );
        }
      },
      {
        name: "poster",
        import: async () => {
          return await import(
            /* webpackChunkName: 'PosterWidget' */ "../../../../editor/src/js/components/widgets/PosterWidget"
          );
        }
      },
      {
        name: "list",
        import: async () => {
          return await import(
            /* webpackChunkName: 'ListWidget' */ "../../../../editor/src/js/components/widgets/ListWidget"
          );
        }
      },
      {
        name: "accordion",
        import: async () => {
          return await import(
            /* webpackChunkName: 'AccordionWidget' */ "../../../../editor/src/js/components/widgets/AccordionWidget"
          );
        }
      },
      {
        name: "carousel",
        import: async () => {
          return await import(
            /* webpackChunkName: 'CarouselWidget' */ "../../../../editor/src/js/components/widgets/CarouselWidget"
          );
        }
      },
      {
        name: "map",
        import: async () => {
          return await import(
            /* webpackChunkName: 'MapWidget' */ "../../../../editor/src/js/components/widgets/MapWidget"
          );
        }
      },
      {
        name: "map_builder",
        import: async () => {
          return await import(
            /* webpackChunkName: 'MapConstructorWidget' */ "../../../../editor/src/js/components/widgets/MapConstructorWidget"
          );
        }
      },
      {
        name: "menu",
        import: async () => {
          return await import(
            /* webpackChunkName: 'MenuWidget' */ "../../../../editor/src/js/components/widgets/MenuWidget"
          );
        }
      },
      {
        name: "diagram",
        import: async () => {
          return await import(
            /* webpackChunkName: 'DiagramWidget' */ "../../../../editor/src/js/components/widgets/DiagramWidget"
          );
        }
      },
      {
        name: "dashboards",
        import: async () => {
          return await import(
            /* webpackChunkName: 'DashboardsWidget' */ "../../../../editor/src/js/components/widgets/DashboardsWidget"
          );
        }
      },
      {
        name: "tour",
        import: async () => {
          return await import(
            /* webpackChunkName: 'TourGuide' */ "../../../../editor/src/js/components/widgets/TourGuide"
          );
        }
      },
      {
        name: "icon",
        import: async () => {
          return await import(
            /* webpackChunkName: 'IconWidget' */ "../../../../editor/src/js/components/widgets/IconWidget"
          );
        }
      },
      {
        name: "export",
        import: async () => {
          return await import(
            /* webpackChunkName: 'ExportPanelWidget' */ "../../../../editor/src/js/components/widgets/ExportPanelWidget"
          );
        }
      },
      {
        name: "html",
        import: async () => {
          return await import(
            /* webpackChunkName: 'HtmlWidget' */ "../../../../editor/src/js/components/widgets/HtmlWidget"
          );
        }
      },
      {
        name: "template",
        import: async () => {
          return await import(
            /* webpackChunkName: 'TemplateWidget' */ "../../../../editor/src/js/components/widgets/TemplateWidget"
          );
        }
      },
      {
        name: "gallery",
        import: async () => {
          return await import(
            /* webpackChunkName: 'GalleryWidget' */ "../../../../editor/src/js/components/widgets/GalleryWidget"
          );
        }
      },
      {
        name: "video",
        import: async () => {
          return await import(
            /* webpackChunkName: 'VideoWidget' */ "../../../../editor/src/js/components/widgets/VideoWidget"
          );
        }
      }
    ];
    this.components = {};
  }

  /**
   *
   * @return {Promise<void>}
   */
  async loadComponents() {
    let componentsToLoad;
    if (window.altrpElementsLists) {
      window.altrpElementsLists = window.altrpElementsLists.filter(elementName =>{
        return this.ELEMENTS.find(element => elementName === element.name);
      })
      componentsToLoad = this.ELEMENTS.filter(el => {
        return window.altrpElementsLists.indexOf(el.name) !== -1;
      });
      componentsToLoad = componentsToLoad.map(async el => {
        return (this.components[el.name] = (
          await el.import()
        ).default);
      });
    } else {
      componentsToLoad = this.ELEMENTS.map(async el => {
        return (this.components[el.name] = (
          await el.import()
        ).default);
      });
    }
    return await Promise.all(componentsToLoad);
  }

  /**
   * Загружаем все компоненты
   * @return {Promise<void>}
   */
  async loadAllComponents() {
    const componentsToLoad = this.ELEMENTS.map(async el => {
      this.components[el.name] = (
        await el.import(/* webpackChunkName: 'FrontElementsFabric' */)
      ).default;
    });
    await Promise.all(componentsToLoad);
  }
  /**
   * Загружаем оставшиеся компоненты
   * @return {Promise<void>}
   */
  async loadNotUsedComponent() {
    if (!window.altrpElementsLists) {
      return;
    }
    let componentsToLoad = this.ELEMENTS.filter(el => {
      return window.altrpElementsLists.indexOf(el.name) === -1;
    });
    componentsToLoad = componentsToLoad.map(async el => {
      this.components[el.name] = (
        await el.import()
      ).default;
    });
    await Promise.all(componentsToLoad);
  }
  /**
   * проверяем все ли виджеты из window.altrpElementsLists загрузились
   */
  componentsIsLoaded() {
    if (! window.altrpElementsLists) {
      return Object.keys(this.components).length === this.ELEMENTS.length;
    }
    return Object.keys(this.components).length >= window.altrpElementsLists.length;
  }

  /**
   *
   * @param name
   * @return {*}
   */
  getComponentClass(name) {
    if (!this.components[name]) {
      console.error("Не найден компонент с именем " + name);
      return "div";
    }
    return this.components[name];
  }

  checkElementExists(elementName) {
    return !!this.components[elementName];
  }
}
window.frontElementsManager = new FrontElementsManager();
export default window.frontElementsManager;
