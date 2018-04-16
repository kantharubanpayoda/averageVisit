function Room(){
	this.visitors = 0;
	this.id = "";
	this.totalTimeSpent = 0;
} 

Room.prototype.addVisitor = function(){
	this.visitors++;
}

Room.prototype.addSpentTime = function(time){
	this.totalTimeSpent = Number(this.totalTimeSpent)+Number(time);
}

Room.prototype.setId = function(id){
	this.id = id;
}

module.exports = Room;
