import My from "@/pages/My/My.jsx";
import Index from "@/pages/Index/index.jsx";
import Home from "@/pages/Home";
import HomeNew from "@/pages/HomeNew";
import About from "@/pages/About";
import Web from '@/pages/Web';
import NotFound from "@/pages/NotFound";

const router = [
    {
        path: '/',
        exact:true,
        element:<Index />,
        auth:false,
        children:[
            {
                path:'home',
                index:true,
                element:<HomeNew />,
                auth:false
            },
            {
                path:'about',
                element:<About />,
                auth:false
            },
            {
                path:'web',
                element:<Web />,
                auth:false
            },
            {
                path:'*',
                element:<NotFound />,
            }
        ]
    },
    {
        path:'*',
        element:<NotFound />,
        auth:false
    },
]
export default router;