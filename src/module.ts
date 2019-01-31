import { PanelCtrl } from 'grafana/app/plugins/sdk'


class TemplatePanel extends PanelCtrl {
  static templateUrl = "partials/module.html"

  constructor($scope, $injector) {
    super($scope, $injector);
  }
}

export{TemplatePanel as PanelCtrl};
