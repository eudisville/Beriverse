import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Project from '../pages/Project';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Project
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: Contact
    },
]

export default routes;