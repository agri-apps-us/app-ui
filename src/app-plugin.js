

import PluginApp from '@/views/PluginApp.vue';
import Dashboard from '@/components/Dashboard.vue';
import Data from '@/components/Data.vue'
import Reports from '@/components/Reports.vue';

export default {
    install(vue, {base, router, register}) {

        const slug = 'plugin-app';

        router.addRoutes([
            {
                path: `${base}${slug}`,
                component: PluginApp,
                meta: { base },
                children: [
                    { 
                        path: '',
                        component: Dashboard,
                        meta: { base }
                    },
                    {
                        path: 'data',
                        component: Data,
                        meta: { base }
                    },
                    {
                        path: 'reports',
                        component: Reports,
                        meta: { base }
                    }
                ]
            }
        ]);

        register({
            id: slug
        })

    }
}