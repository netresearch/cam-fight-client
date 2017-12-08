import Vue from 'vue'
import Router from 'vue-router'
// Pages
import Intro from '@/pages/Intro'
import Team from '@/pages/Team'
import ChallengeList from '@/pages/Challenge/List'
import ChallengeDetail from '@/pages/Challenge/Detail'
import Waiting from '@/pages/Waiting'
import Help from '@/pages/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:      '/',
      name:      'Intro',
      component: Intro
    },
    {
      path:      '/team',
      name:      'Team',
      component: Team
    },
    {
      path:      '/challenge/list',
      name:      'ChallengeList',
      component: ChallengeList
    },
    {
      path:      '/challenge/detail/:id',
      name:      'ChallengeDetail',
      component: ChallengeDetail
    },
    {
      path:      '/challenge/waiting',
      name:      'Waiting',
      component: Waiting
    },
    {
      path:      '/help',
      name:      'Help',
      component: Help
    }
  ]
})
