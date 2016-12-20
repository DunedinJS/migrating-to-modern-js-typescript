import * as _ from 'underscore';
import * as Backbone from 'backbone';

import AppModel from './Model';
import DisplayView from '../display/View';
import ControlsView from '../controls/View';

import * as template from './template.html';

// The main view for the application
export default class AppView extends Backbone.View<AppModel> {
  
  template: (data?: any) => string;
  displayView: DisplayView;
  controlsView: ControlsView;

  constructor(options: any) {
    super(options);
    this.template = _.template(template);
  }

  render() {
    // render the view template
    this.$el.html(this.template());

    // create instances for child-views
    this.displayView = new DisplayView({
      el: this.$('.display'), // the element to attach the child-view to
      model: this.model // provide the same model to the child-view
    });
    this.controlsView = new ControlsView({
      el: this.$('.controls'),
      model: this.model
    });

    // render child-views
    this.displayView.render();
    this.controlsView.render();

    return this;
  }

}
