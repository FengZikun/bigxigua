<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到大西瓜商城'
    }
  },
  computed:{
    ...mapState({
      'count':state=>state.count
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
