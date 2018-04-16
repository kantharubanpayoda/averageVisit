var dataFile = 'sampleInput.txt';
var hashMap = require('hashmap');
const Room = require('./room.js');
const Visitor = require('./visitor.js');
var lineReader = require('line-reader');
var hMap = new hashMap();
var hMap2 = new hashMap();

lineReader.eachLine(dataFile, function(line, last) {

	var lineInfo = [];
	lineInfo = line.split(" ");
if(lineInfo[1] != undefined){
		var room = hMap.get(lineInfo[1])
		if(room == null && room == undefined)
		{
			room = new Room();
			room.setId(lineInfo[1]);
		}

		var visitor= hMap2.get(lineInfo[0]+room.id);
		if(visitor == null && visitor == undefined)
		{
			visitor = new Visitor();
			visitor.setId(lineInfo[0]+room.id);
			hMap2.set(lineInfo[0]+room.id,visitor);
			room.addVisitor();
		}
		visitor.addVisit(lineInfo[1],lineInfo[2],lineInfo[3],function(result){
			room.addSpentTime(result);
		});
		hMap.set(lineInfo[1],room);

	}

  if (last) {
		var keys = hMap.keys();
		keys.sort(function(a, b){return a - b});
		console.log("Final results :");
		for(var i=0 ; i<keys.length; i++)
		{
			finalResult(hMap.get(keys[i]));
		}
  }
});


finalResult = function(room){
	var averageTime = Number(room.totalTimeSpent)/Number(room.visitors);
	console.log("Room "+room.id+" has "+parseInt(averageTime)+" minutes average spent by " +room.visitors +" visitor(s) total");
}
