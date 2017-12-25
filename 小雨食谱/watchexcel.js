var fs = require('fs');// 引入fs 模块
var excelParser = require('excel-parser');
var path = require('path');
var counter = 0;
// var filePath = 'input.txt';
var filePath_description = 'recipes_description.xls';
fs.watchFile(filePath_description, function (event, filename) {
      console.log('event is: ' + event);
      if (filename) {
         console.log('filename provided: ' + filename);
        //readTxt();

		    excelParser.parse({
		        inFile: filePath_description,
		        worksheet: 1,
		        skipEmpty: false,
		        searchFor: {
		            type:'loose'
		        }
		    },function(err, records){
		        // if(err){
		        //     return callback(err,null);
		        // }
		        //delete records[0];
		        // return callback(null, records);
		        console.log(err);
		        // console.log(JSON.stringify(records))
		        var res = 'var recipes_description = ' + JSON.stringify(records);
		        fs.writeFile('./recipes_description.js', res)
        });

		   


    		console.log(filePath_description + '数据已更新' + (counter++))



	      } else {
	        console.log('filename not provided');
	      }


});

var filePath_images = 'recipes_images.xls';
fs.watchFile(filePath_images, function (event, filename) {
      console.log('event is: ' + event);
      if (filename) {
         console.log('filename provided: ' + filename);
        //readTxt();

		    excelParser.parse({
		        inFile: filePath_images,
		        worksheet: 1,
		        skipEmpty: false,
		        searchFor: {
		            type:'loose'
		        }
		    },function(err, records){
		        // if(err){
		        //     return callback(err,null);
		        // }
		        //delete records[0];
		        // return callback(null, records);
		        console.log(err);
		        // console.log(JSON.stringify(records))
		        var res = 'var recipes_images = ' + JSON.stringify(records);
		        fs.writeFile('./recipes_images.js', res)
        });


    		console.log(filePath_images + '数据已更新' + (counter++))



	      } else {
	        console.log('filename not provided');
	      }


});
var filePath_ingredients = 'recipes_ingredients.xls';
fs.watchFile(filePath_ingredients, function (event, filename) {
      console.log('event is: ' + event);
      if (filename) {
         console.log('filename provided: ' + filename);
        //readTxt();

		    excelParser.parse({
		        inFile: filePath_ingredients,
		        worksheet: 1,
		        skipEmpty: false,
		        searchFor: {
		            type:'loose'
		        }
		    },function(err, records){
		        // if(err){
		        //     return callback(err,null);
		        // }
		        //delete records[0];
		        // return callback(null, records);
		        console.log(err);
		        // console.log(JSON.stringify(records))
		        var res = 'var recipes_ingredients = ' + JSON.stringify(records);
		        fs.writeFile('./recipes_ingredients.js', res)
        });


    		console.log(filePath_ingredients + '数据已更新' + (counter++))



	      } else {
	        console.log('filename not provided');
	      }


});



var filePath_spices = 'recipes_spices.xls';
fs.watchFile(filePath_spices, function (event, filename) {
      console.log('event is: ' + event);
      if (filename) {
         console.log('filename provided: ' + filename);
        //readTxt();

		    excelParser.parse({
		        inFile: filePath_spices,
		        worksheet: 1,
		        skipEmpty: false,
		        searchFor: {
		            type:'loose'
		        }
		    },function(err, records){
		        // if(err){
		        //     return callback(err,null);
		        // }
		        //delete records[0];
		        // return callback(null, records);
		        console.log(err);
		        // console.log(JSON.stringify(records))
		        var res = 'var recipes_spices = ' + JSON.stringify(records);
		        fs.writeFile('./recipes_spices.js', res)
        });
    		console.log(filePath_spices + '数据已更新' + (counter++))
	      } else {
	        console.log('filename not provided');
	      }
});

var filePath_menu = 'data_menu.xls';
fs.watchFile(filePath_menu, function (event, filename) {
      console.log('event is: ' + event);
      if (filename) {
         console.log('filename provided: ' + filename);
        //readTxt();

		    excelParser.parse({
		        inFile: filePath_menu,
		        worksheet: 1,
		        skipEmpty: false,
		        searchFor: {
		            type:'loose'
		        }
		    },function(err, records){
		        // if(err){
		        //     return callback(err,null);
		        // }
		        //delete records[0];
		        // return callback(null, records);
		        console.log(err);
		        // console.log(JSON.stringify(records))
		        var res = 'var data_menu = ' + JSON.stringify(records);
		        fs.writeFile('./data_menu.js', res)
        });
    		console.log(filePath_menu + '数据已更新' + (counter++))
	      } else {
	        console.log('filename not provided');
	      }
});

// console.log(filePath + ' 被监听中...');






