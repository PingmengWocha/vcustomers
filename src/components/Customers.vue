<template>
    <div class="customers container">
        <Alert v-if="alert" :message="alert"></Alert>
        <h1 class="page-header">用户管理系统</h1>

        <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
        <br>
        <table class="table table-striped">
            <thead>
             <tr>
                 <th>姓名</th>
                 <th>电话</th>
                 <th>邮箱</th>
                 <th></th>
             </tr>
            </thead>

            <tbody>
             <tr v-for="item in filterBy(customers,filterInput)" :key="item.id">
                 <td>{{item.name}}</td>
                 <td>{{item.phone}}</td>
                 <td>{{item.email}}</td>
                 <td><router-link class="btn btn-default" :to="'/customer/'+ item.id">详情</router-link></td>
             </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {getCustomers} from "../network/customers";

    import Alert from './Alert'

    export default {
        name: "Customers",
        data () {
            return {
                customers: [],
                alert: "",
                filterInput: ""
            }
        },
        methods: {
            getCustomers() {
                getCustomers().then(data => {
                    this.customers = data;
                    return
                });
            },

            filterBy(customers,value) {
                return customers.filter(function (customers) {
                    return customers.name.match(value)
                })
            }
        },
        created() {
          if (this.$route.query.alert){
            this.alert = this.$route.query.alert
          }
          this.getCustomers()
        },
        components: {
            Alert
        }
    }
</script>

<style scoped>

</style>
