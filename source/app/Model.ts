import * as Backbone from 'backbone';

// A model which stores and manages application data
export default class AppModel extends Backbone.Model {

  getSeconds(): number {
    var pauseTimestamp = this.get('pauseTimestamp');
    var offset = pauseTimestamp || Date.now();
    var timestamp = offset - this.get('timestamp');

    return Math.floor(timestamp / 1000);
  }

  isPaused(): boolean {
    return !!this.get('pauseTimestamp');
  }

  pause() {
    this.set({
      pauseTimestamp: Date.now()
    });
  }

  continue() {
    var pauseTimestamp = this.get('pauseTimestamp');
    var offset = pauseTimestamp - this.get('timestamp');

    this.set({
      timestamp: Date.now() - offset,
      pauseTimestamp: null
    });
  }

  reset() {
    this.set({
      timestamp: Date.now(),
      pauseTimestamp: null
    });
  }

}
