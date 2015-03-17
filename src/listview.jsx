var React=require("react");
var Reflux=require("reflux");
var store=require("./store");
var actions=require("./actions")
var Listview = React.createClass({
	mixins:[Reflux.listenTo(store,"onStore")]
	,getInitialState:function(){
		return {data:[]};
	}
	,onStore:function(data) {
		this.setState({data:data});
	}
	,toggleDone:function(e) {
		var itemidx=e.target.dataset.idx;
		//console.log(itemidx);
		actions.toggle(itemidx);
	}
	,renderItem:function(item,idx) {
		return <div key={idx}>
		<li data-idx={idx} onClick={this.toggleDone}
			className={item.done?"done":""}>{item.caption}</li></div>
	}
	,render: function() {
		return <ol>
			{this.state.data.map(this.renderItem)}
		</ol>;
	}
});
module.exports=Listview