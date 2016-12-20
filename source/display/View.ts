import * as _ from 'underscore';
import * as Backbone from 'backbone';

import AppModel from '../app/Model';

interface TemplateData {
  seconds: number
}

// A view which displays the elapsed time in seconds
export default class DisplayView extends Backbone.View<AppModel> {

  template: (data: TemplateData) => string;

  constructor(options: any) {
    super(options);
    this.template = _.template('<%= seconds %> seconds');
  }

  initialize() {
    // save reference to the correct this context
    var self = this;

    // re-render every second (1000 milliseconds) if not paused
    window.setInterval(function() {
      if (!self.model.isPaused()) {
        self.render();
      }
    }, 1000);

    // re-render on model change
    this.listenTo(this.model, 'change', this.render);
  }

  render() {
    this.$el.html(this.template({
      seconds: this.model.getSeconds()
    }));

    return this;
  }

}
