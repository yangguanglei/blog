import home from './views/home.vue';
import login from './views/login.vue';
import index from './views/index.vue';
import about from './views/about.vue';
import codeIteration from './views/codeIteration.vue';
import ITTutorial from './views/ITTutorial.vue';
import evernote from './views/evernote.vue';
import detailedView from './views/detailedView.vue';
import softwareDownload from './views/softwareDownload.vue';

const routers = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/',
        name: 'home',
        meta: {requireAuth: true},
        component: home,
        children: [
            {
                path: '',
                redirect: 'index',
                name: index
            },
            {
                path: 'index',
                name: 'index',
                components: {
                    menurouter: index
                }
            },
            {
                path: 'about',
                name: about,
                components: {
                    menurouter: about
                }
            },
            {
                path: 'codeIteration',
                name: codeIteration,
                components: {
                    menurouter: codeIteration
                }
            },
            {
                path: 'softwareDownload',
                name: softwareDownload,
                components: {
                    menurouter: softwareDownload
                }
            },
            {
                path: 'ITTutorial',
                name: ITTutorial,
                components: {
                    menurouter: ITTutorial
                }
            },
            {
                path: 'evernote',
                name: evernote,
                components: {
                    menurouter: evernote
                }
            },
            {
                path: 'detailedView',
                name: detailedView,
                components: {
                    menurouter: detailedView
                }
            },
        ]
    },
];
export default routers;