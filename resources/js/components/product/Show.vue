<template>
    <div class="row">
        <div class="col-lg-12 mb-4">
            <router-link
                :to="{ name: 'createProducts' }"
                class="btn btn-primary"
            >
                <i class="fas fa-plus"></i> New
            </router-link>
        </div>

        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <th class="text-center">ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th class="text-center">Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id">
                            <td class="text-center">{{ product.id }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.description }}</td>
                            <td class="text-center">{{ product.stock }}</td>
                            <td class="text-center">
                                <router-link
                                    class="btn btn-warning"
                                    :to="{
                                        name: 'editProduct',
                                        params: { id: product.id },
                                    }"
                                >
                                    <i class="fas fa-pencil-alt"></i>
                                </router-link>
                                <button
                                    @click="deleteProduct(product.id)"
                                    class="btn btn-danger"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "products",
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.showProducts();
    },
    methods: {
        async showProducts() {
            await this.axios
                .get("/api/product")
                .then((response) => {
                    this.products = response.data;
                })
                .catch((e) => {
                    this.products = [];
                });
        },
        deleteProduct(id) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                this.axios
                    .delete(`api/product/${id}`)
                    .then((response) => {
                        this.showProducts();
                        Swal.fire(
                            "Deleted!",
                            "Your product has been deleted.",
                            "success"
                        );
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            });
        },
    },
};
</script>
