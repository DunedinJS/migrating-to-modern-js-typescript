import * as _ from 'underscore';
import * as Backbone from 'backbone';

import AppModel from '../app/Model';
import * as template from './template.html';

interface TemplateData {
  isPaused: boolean
}

// A view which manages the pause, continue, and reset buttons
export default class ControlsView extends Backbone.View<AppModel> {

  template: (data: TemplateData) => string;

  constructor(options: any) {
    super(options);

    this.template = _.template(template);
  }

  events() {
    return {
      'click .pause': 'onPause',
      'click .continue': 'onContinue',
      'click .reset': 'onReset'
    };
  }

  initialize() {
    // re-render on model change
    this.listenTo(this.model, 'change', this.render);
  }

  render() {
    this.$el.html(this.template({
      isPaused: this.model.isPaused()
    }));

    return this;
  }

  onPause() {
    this.model.pause();
  }

  onContinue() {
    this.model.continue();
  }

  onReset() {
    this.model.reset();
  }

}
