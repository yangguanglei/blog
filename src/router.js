const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/home.vue'], resolve)
    }
];
export default routers;