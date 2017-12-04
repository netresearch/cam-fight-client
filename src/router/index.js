import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Intro from '@/pages/Intro'
import Team from '@/pages/Team'
import ChallengeList from '@/pages/Challenge/List'
import ChallengeDetail from '@/pages/Challenge/Detail'
import VotingList from '@/pages/Voting/List'
import VotingDetail from '@/pages/Voting/Detail'
import Help from '@/pages/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/challenge/list',
      name: 'ChallengeList',
      component: ChallengeList
    },
    {
      path: '/challenge/detail',
      name: 'ChallengeDetail',
      component: ChallengeDetail
    },
    {
      path: '/voting/list',
      name: 'VotingList',
      component: VotingList
    },
    {
      path: '/voting/detail',
      name: 'VotingDetail',
      component: VotingDetail
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
