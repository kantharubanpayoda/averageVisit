function Visitor()
{
	this.visitorId = "";
	this.intime = "";
	this.spentTime = "";
	
}

Visitor.prototype.addVisit=function(r,action,time,cb){
	if(action == 'I')
	{
		this.intime = time;
		cb("");
	}
	else
	{
		this.spentTime = time - this.intime
		cb(this.spentTime);
	}
};

Visitor.prototype.setId=function(id){
	this.visitorId = id;
};

module.exports=Visitor;
