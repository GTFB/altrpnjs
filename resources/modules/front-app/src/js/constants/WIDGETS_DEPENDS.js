
const WIDGETS_DEPENDS = {
  'menu': ['blueprint'],
  'breadcrumbs': ['blueprint'],
  'tabs': ['blueprint', 'template-loader'],
  'input': ['moment'],
  'section': ['section-element-wrapper'],
  'column': ['section-element-wrapper'],
  'section_widget': ['section-element-wrapper'],
  'input-select': ['blueprint', 'blueprint-select'],
  'input-radio': ['blueprint'],
  'input-checkbox': ['blueprint'],
  'input-accept': ['blueprint'],
  'input-file': ['blueprint'],
  'input-gallery': ['blueprint'],
  'input-text': ['blueprint'],
  'input-text-common': ['blueprint'],
  'input-wysiwyg': ['ckeditor'],
  'input-date': ['blueprint', 'blueprint-datetime', 'moment'],
}
export default WIDGETS_DEPENDS;
