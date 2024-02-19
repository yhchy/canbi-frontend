export default [
  {
    path: '/user',
    layout: false,
    name: '用户',
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  { path: '/', redirect: '/admin' },
  { path: '/add_chart', name: '智能分析', icon: 'barChart', component: './AddChart' },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页面',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: '管理页面1', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '管理页面2', component: './Admin' },
    ],
  },
  { path: '*', layout: false, component: './404' },
];
