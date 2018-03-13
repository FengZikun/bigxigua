<template>
	<div>
		首页
		<div>
			<input type="button" name="" value="click" @click='begin'>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
const a = 1;
class Chain {
	constructor(fn){
		this.fn = fn;
		this.successor = null;
	}

	next(successor){
		return this.successor = successor;
	}

	passRequest(){
		let ret = this.fn.apply(this, arguments);
		if(ret === true){
			return this.successor && this.successor.passRequest.apply(this.successor, arguments);
		}
		return ret
	}
};

class Player {
	constructor(name, teamColor){
		this.name = name;
		this.teamColor = teamColor;
		this.state = true
	}

	win(){
		console.log(`${this.name}:won`)
	}

	lost(){
		console.log(`${this.name}:lost`)
	}

	die(){
		this.state = false;
		playDirector.ReceiveMessage('died', this)
	}
}

export default {
	data(){
		return{
			
		}
	},

	methods:{
		order500yuan(type, count, pay){
			if(type === 1 && count>0 && pay ===true){
				console.log(`500元优惠券`)
			} else {
				return true
			}
		},

		order200yuan(type, count, pay){
			if(type === 2 && count>0 && pay ===true){
				console.log(`200元优惠券`)
			} else {
				return true
			}
		},

		order100yuan(type, count, pay){
			if(type === 3 && count>0 && pay ===true){
				console.log(`100元优惠券`)
			} else {
				return true
			}
		},

		normalOrder(){
			console.log(`普通订单`)
		},

		begin(){
			var chainOrder500 = new Chain(this.order500yuan);
			var chainOrder200 = new Chain(this.order200yuan);
			var chainOrder100 = new Chain(this.order100yuan);
			var chainnormalOrder = new Chain(this.normalOrder);
			chainOrder500.next(chainOrder200);
			chainOrder200.next(chainOrder100);
			chainOrder100.next(chainnormalOrder);
			chainOrder500.passRequest(3, 0, true);
		}

	},

	mounted(){
		
	}
}
</script>

<style type='scoped'>

</style>