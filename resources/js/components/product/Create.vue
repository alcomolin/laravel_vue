<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header"><h4>Create Product</h4></div>
                        <div class="card-body">
                            <form @submit.prevent="create">
                                <div class="row">
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="product.name"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-floating">
                                            <textarea
                                                class="form-control"
                                                id="descriptionProduct"
                                                v-model="product.description"
                                                rows="5"
                                                maxlength="150"
                                            ></textarea>
                                            <label for="descriptionProduct"
                                                >Description</label
                                            >
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label>Stock</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                v-model="product.stock"
                                                placeholder="0"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "create-product",
    data() {
        return {
            product: {
                name: "",
                description: "",
                stock: "",
            },
        };
    },
    methods: {
        async create() {
            await this.axios
                .post("/api/product", this.product)
                .then((response) => {
                    this.$router.push({ name: "showProducts" });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
};
</script>
