/* jslint node: true, sub: true */
/* jshint esversion: 6 */
'use strict';

var synaptic = require('synaptic');


var mySingleton = (function() {

  // Instance stores a reference to the Singleton
  var instance;

  var ml_battery_predic = {
    neurons: [{
        trace: {
          elegibility: {},
          extended: {}
        },
        state: 0,
        old: 0,
        activation: 0.2987,
        bias: 0,
        layer: 'input',
        squash: 'LOGISTIC'
      },
      {
        trace: {
          elegibility: {},
          extended: {}
        },
        state: 0,
        old: 0,
        activation: 0.0014528935185185183,
        bias: 0,
        layer: 'input',
        squash: 'LOGISTIC'
      },
      {
        trace: {
          elegibility: {},
          extended: {}
        },
        state: 10.268452510872724,
        old: 10.270907118107846,
        activation: 0.9999652901559597,
        bias: 8.129467991994128,
        layer: 0,
        squash: 'LOGISTIC'
      },
      {
        trace: {
          elegibility: {},
          extended: {}
        },
        state: -6.898960131223438,
        old: -8.172780457026466,
        activation: 0.0010078172184973628,
        bias: -62.6040485096499,
        layer: 0,
        squash: 'LOGISTIC'
      },
      {
        trace: {
          elegibility: {},
          extended: {}
        },
        state: -1.3868560661623248,
        old: -1.3861856716717893,
        activation: 0.19991014233762378,
        bias: 0.7481907186805646,
        layer: 'output',
        squash: 'LOGISTIC'
      }
    ],
    connections: [{
        from: 0,
        to: 2,
        weight: 7.147652058198406,
        gater: null
      },
      {
        from: 0,
        to: 3,
        weight: 186.17582350548574,
        gater: null
      },
      {
        from: 1,
        to: 2,
        weight: 2.7399455252513865,
        gater: null
      },
      {
        from: 1,
        to: 3,
        weight: 64.9530720145905,
        gater: null
      },
      {
        from: 2,
        to: 4,
        weight: -2.1341943836468906,
        gater: null
      },
      {
        from: 3,
        to: 4,
        weight: -0.919292440337687,
        gater: null
      }
    ]
  };

  function init() {

    // Singleton

    /* ------------------------------------------------------------ */

    return {

      // Public methods and variables
      predictBatteryChemicalComposition: (voltage, age) => {

        var Network = synaptic.Network;
        var myNet = Network.fromJSON(ml_battery_predic);

        var i1 = parseFloat(voltage) / 10;
        var i2 = parseInt(age) / 1000;

        var output = myNet.activate([i1, i2]);

        console.log(`Result: ${output}`);

        var type = Number.parseFloat(output).toFixed(1);

        if (type == 0.2) {
          return 'Alkaline';
        } else if (type == 0.1) {
          return 'Lithium';
        }

        return 'Unknown';
      },

    };

  };

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {

      if (!instance) {
        instance = init();
      }

      return instance;
    }

  };

})();

module.exports = mySingleton.getInstance();
