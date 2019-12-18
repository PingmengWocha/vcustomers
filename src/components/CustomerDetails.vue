<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      {{customer.name}}

      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/'+customer.id">
          编辑
        </router-link>
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">
          {{customer.phone}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">
          {{customer.email}}
        </span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">
          {{customer.education}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">
          {{customer.graduationschool}}
        </span>
      </li>

      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">
          {{customer.profession}}
        </span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">
          {{customer.profile}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  // import {deleteCustomers} from "../network/customers";
  import {getCustomers} from "../network/customers";
  import axios from 'axios'

  export default {
    name: "customerdetails",
    data () {
      return {
        customer: ""
      }
    },
    methods: {
      fetchCustomers(id){
        let data = {
          "id": id
        }
        getCustomers(data).then(res => {
          console.log(res)
          this.customer = res[0]
        })
      },
      deleteCustomer(id) {
        axios.delete("http://localhost:3000/users/"+ id)
          .then(res => {
            console.log(res)
            this.$router.push({path:"/",query: {alert: "用户删除成功！"}});
          })
        // let data = {
        //   "id": id
        // }
        // deleteCustomers(data).then(res => {
        //   console.log(res)
        //   this.$router.push({path:"/",query: {alert:"用户删除成功！"}});
        // })
      }
    },
    created() {
      this.fetchCustomers(this.$route.params.id);
    }

  }
</script>

<style scoped>

</style>
