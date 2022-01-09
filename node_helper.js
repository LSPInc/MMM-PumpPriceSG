let NodeHelper = require('node_helper');
let fetch = require('node-fetch');
let cheerio = require('cheerio');

module.exports = NodeHelper.create({
  start: function () {
    console.log('MMM-PumpPriceSG helper started...');
  },

  getJson: function (url) {
    let self = this;

 
		fetch(url).then(response => response.text()).then(html => {
			// Send the json data back with the url to distinguish it on the receiving part
			var $ = cheerio.load(html);		
			var contents = [];
			
			 $('table.table.table-borderless.fuel_comparison_table.mb-0 tr td').each(function(i, element)
				{
					contents[i] = $(this).text().replace(/\r|\n/g,",");
				}     
			);
			
			
			var fuel = [];
			for (let i = 0; i < 5; i++) {
			fuel[i] = { "type": contents[i+(i*5)], "esso": contents[i+(i*5)+1], "shell":contents[i+(i*5)+2], "spc": contents[i+(i*5)+3], "caltex":contents[i+(i*5)+4], "sinopec":contents[i+(i*5)+5]}; 
			}
			
			
			let result = JSON.stringify(fuel);
			//console.log(fuel);
			

			self.sendSocketNotification("MMM-PumpPriceSG_JSON_RESULT", {url: url, data: fuel});
		});
  
  },  
  
  
  //Subclass socketNotificationReceived received.
	socketNotificationReceived: function (notification, url) {
		if (notification === "MMM-PumpPriceSG_GET_JSON") {
			this.getJson(url);
		}

	}
  
  
});
