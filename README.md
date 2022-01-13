# MMM-NEATide

A module for the [MagicMirror²](https://github.com/MichMich/MagicMirror) project which creates a table filled with the latest tide timings from NEA Singapore.

All the variables of the objects in the array are represented by a table column.

## Installation

```
git clone https://github.com/lengsp/MMM-PumpPriceSG
cd MMM-PumpPriceSG
npm install
```

## Config Options

Except `url` all options are optional.

| **Option**     | **Description**
| -------------- | ---
| url            | The full url to get the json response from <br><br>**Default value:** `""`
| arrayName      | Define the name of the variable that holds the array to display <br><br>**Default value:** `null`
| noDataText     | Text indicating that there is no data. <br><br>**Default value:** `Json data is not of type array! Maybe the config arrayName is not used and should be, or is configured wrong.`
| keepColumns    | Columns on json will be showed  <br><br>**Default value:** `[]`
| tryFormatDate  | For every column it checks if a valid DateTime is given, and then formats it to `HH:mm:ss` if it is today or `YYYY-MM-DD` otherwise <br><br>**Default value:** `false`<br> **Possible values:** `false` and `true`
| size           | Text size at table, 0 is default and 3 is H3 <br><br>**Default value:** `0`<br> **Possible values:** `0` - `3`
| updateInterval | Milliseconds between the refersh <br><br>**Default value:** `15000`
| animationSpeed | Speed of the update animation. (Milliseconds)<br>If you don't want that the module blinks during an update, set the value to `0`. <br><br>**Default value:** `500`<br> **Possible values:** `0` - `5000`
| descriptiveRow | Complete html table row that will be added above the array data <br><br>**Default value:** `""`

## Example

![fuel price](https://github.com/lengsp/MMM-PumpPriceSG/blob/master/fuel.jpg)


Configuration:

```javascript
{
	module: 'MMM-PumpPriceSG',
	position: 'top_right',
	header: 'Singapore Fuel Price',
	updateInterval: 3600000,
	config: {
		url: 'https://www.motorist.sg/petrol-prices',
		descriptiveRow: '<tr><td>Grade</td><td>Esso</td><td>Shell</td><td>SPC</td><td>Caltex</td><td>SinoPec</td></tr>'
	}
}
```
