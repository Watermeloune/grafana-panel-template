import { PanelCtrl } from 'grafana/app/plugins/sdk'
import './css/style.css'

class TemplatePanel extends PanelCtrl {
  static templateUrl = "partials/module.html"

  constructor($scope, $injector) {
    super($scope, $injector);
    console.log("==============PanelCtrl==============");
    console.log(PanelCtrl);
    console.log("==============PanelCtrl==============");

  }
}

export{TemplatePanel as PanelCtrl};
