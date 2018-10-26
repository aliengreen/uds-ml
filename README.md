# Units Device Service Machine Learning Module

This is a set of ML solutions and functions used in Mostat project.

Currently there are implemented couple of ML routines, see below:

- Predict 2x AA battery chemical composition used in Mostat room sensor and other AG products


### Predict battery chemical composition
 
The idea is to predict the chemical composition of the battery according to its voltage and age. As you know we using Room Sensor device with 2x AA type battery. In our case the battery chemical composition may be two types `Lithium` (Energizer Ultimate, etc..) and `Alkaline` (Duracell Turbo, etc..). The battery age starts from battery first registration date and the age is counts in days, so first registration date should be 0 days.
The above information is used to precisely calculate battery percentage. In other world, we make battery voltage range representation in percents:

- `Lithium` range from 3.400V and above - 100%, 2.600V - 0%
- `Alkaline` range from 3.100V and above - 100%, 2.300V - 0%

For prediction we are using neural network library [synaptic.js](https://github.com/cazala/synaptic). The architecture is multilayer perceptrons. See [Perceptron](https://github.com/cazala/synaptic/wiki/Architect) for more information. 

There is 2 input layers - voltage and age. Two hidden layers and one output layer for chemical composition.


The UDS ML is used in [Mostat Wi-Fi thermostat](https://aliengreen.ge/en/thermostat/) produced by [Alien Green LLC](https://aliengreen.ge)


## Installation

Installing from github like this:

```bash
npm install aliengreen/uds-ml
```

## Usage

To predict battery chemical composition you should call function `predictBatteryChemicalComposition` and pass two parameters. Current battery voltage (for 2x AA battery) e.g `2.987` and age in days e.g. `60`.

Below is an example how to use this function.

```javascript
var udsml = require('uds-ml');

let result = udsml.predictBatteryChemicalComposition(2.987, 60);

console.log(result); // 'Alkaline'

```
Possible answers:

- Lithium
- Alkaline
- Unknown

## Notes

@TODO

## License

Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.
