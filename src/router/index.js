import Vue from 'vue'
import Router from 'vue-router'

const Index= r => require.ensure([], () => r(require('@/page/index')), 'index')

Vue.use(Router)

export default new Router({
  	routes: [
    	{
			path:'/',
        	redirect:"/index"
    	},
    	{
			name:"index",
    		path:'/index',
	        component:Index,
	        meta: {title:'票房'}
		},	

  	]
})
