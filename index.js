require('aframe');
require('aframe-input-mapping-component');

require('./src/components/quick-ui.js');
require('./src/systems/ui.js');
require('./src/components/ui.js');
require('./src/components/ui-raycaster.js');

require('./src/LegacyJSONLoader.js');
require("./src/utils.js");
require('./src/components/json-model.js');

// Controller models.  Kindof a hack.
if (window.CONTROLLER_MODELS === undefined || !window.hasOwnProperty('CONTROLLER_MODELS')) { //TODO Is hack?
    window.CONTROLLER_MODELS = {};
}
import vive_model from './assets/models/controller_vive.json';
if (!window.CONTROLLER_MODELS["vive-controls"]) {
  //window.CONTROLLER_MODELS["vive-controls"] = {type: "json-model", data: {src: 'assets/models/controller_vive.json'}}; // Local override
  window.CONTROLLER_MODELS["vive-controls"] = {type: "json-model", data: {data: vive_model}};
}
if (!window.CONTROLLER_MODELS["oculus-touch-controls"]) {
  /*
  // This would be how you add oculus controller models - but the whole npm assets not carrying over easily makes it a pain on this end.
  // Copy this into the final app's index.js, before the import of this package, and copy the referenced files below into said app, to hopefully
  // make oculus controllers look right.
  window.CONTROLLER_MODELS["oculus-touch-controls"] = {
    type: "obj-model",
    hands: {
        left: {obj: "assets/models/oculus-left-controller.obj", mtl: "https://cdn.aframe.io/controllers/oculus/oculus-touch-controller-left.mtl"},
        right: {obj: "assets/models/oculus-right-controller.obj", mtl: "https://cdn.aframe.io/controllers/oculus/oculus-touch-controller-right.mtl"}
    }
  };
  */
  // In the meantime, oculus users get vive controllers, haha
  window.CONTROLLER_MODELS["oculus-touch-controls"] = {type: "json-model", data: {data: vive_model}};
}
if (!window.CONTROLLER_MODELS["windows-motion"]) {
    window.CONTROLLER_MODELS["windows-motion"] = {type: "DUMMY", data: null};
}

require('./src/components/paint-controls.js');