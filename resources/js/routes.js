/* Importar componentes de Producto */

const Show = () => import("./components/product/Show.vue");
const Create = () => import("./components/product/Create.vue");
const Edit = () => import("./components/product/Edit.vue");

export const routes = [
    {
        name: "showProducts",
        path: "/",
        component: Show,
    },
    {
        name: "createProducts",
        path: "/create",
        component: Create,
    },
    {
        name: "editProduct",
        path: "/edit/:id",
        component: Edit,
    },
];
