import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Events from '@/components/Events'
import Input from '@/components/Input'
import Transition from '@/components/Transition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/input',
      name: 'Input',
      component: Input,
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition,
    }
  ],
})
