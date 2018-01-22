org_opennms_features_vaadin_components_graph_GraphContainer = function() {
  var e = this.getElement();

  console.log('graphcontainer: registering state change');
  this.onStateChange = function() {
    console.log('graphcontainer: state change triggered', this.getState());
    // Globals
    window.onmsGraphContainers = {
        'baseHref': this.getState().baseHref,
        'engine': this.getState().engine
    };

    // Build the div
    var div = document.createElement('div');
    div.setAttribute('class', 'graph-container');
    div.setAttribute('data-resource-id', this.getState().resourceId);
    div.setAttribute('data-graph-name', this.getState().graphName);
    if (this.getState().start != undefined && this.getState().start != null) {
    	div.setAttribute('data-graph-start', this.getState().start);
    }
    if (this.getState().end != undefined && this.getState().end != null) {
    	div.setAttribute('data-graph-end', this.getState().end);
    }
    if (this.getState().widthRatio != undefined && this.getState().widthRatio != null) {
    	div.setAttribute('data-width-ratio', this.getState().widthRatio);
    }
    if (this.getState().heightRatio != undefined && this.getState().heightRatio != null) {
    	div.setAttribute('data-height-ratio', this.getState().heightRatio);
    }
    if (this.getState().title != undefined && this.getState().title != null) {
    	div.setAttribute('data-graph-title', this.getState().title);
    }

    // Remove any existing children
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }

    // Add our div
    e.appendChild(div);

    // Render
    GraphContainers.render();
  }
}

org_opennms_features_vaadin_components_graph_InlineGraphContainer = function() {
  var e = this.getElement();

  console.log('inlinegraphcontainer: registering state change');
  this.onStateChange = function () {
    console.log('inlinegraphcontainer: state change triggered', this.getState());
    // Globals
    window.onmsGraphContainers = {
      'baseHref': this.getState().baseHref,
      'engine': this.getState().engine
    };

    // Render
    GraphContainers.render();
  }
}
