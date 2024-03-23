import CreatorCenter from '~/components/layouts/CreatorCenter';
import {
    Home,
    Following,
    Friends,
    Explore,
    Live,
    Profile,
    Upload,
    Search,
} from '~/pages';

// publicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/friends', component: Friends },
    { path: '/explore', component: Explore },
    { path: '/live', component: Live },
    { path: '/profile', component: Profile },
    {
        path: '/creator-center/upload',
        component: Upload,
        layout: CreatorCenter,
    },
    { path: '/search', component: Search, layout: null },
];

// privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
