import { PanelCtrl , MetricsPanelCtrl} from 'grafana/app/plugins/sdk'
import _ from 'lodash';
import './css/style.css'

const panelDefaults = {
  bgColor: null
};

class TemplatePanel extends MetricsPanelCtrl {
  static templateUrl = "partials/module.html";


  constructor($scope, $injector) {
    super($scope, $injector);

    _.defaultsDeep(this.panel, panelDefaults);
    console.log("==============PanelCtrl==============");
    console.log(this);
    console.log("==============PanelCtrl==============");

    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  }

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/beebryte-template-panel/partials/editor.html');
  }

  onDataReceived(dataList) {

  }
}

export{TemplatePanel as PanelCtrl};
