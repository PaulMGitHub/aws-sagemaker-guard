<template lang='pug'>
  v-card
    v-progress-linear(indeterminate)
</template>

<script>
/*
Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Amazon Software License (the "License"). You may not use this file
except in compliance with the License. A copy of the License is located at

http://aws.amazon.com/asl/

or in the "license" file accompanying this file. This file is distributed on an "AS IS"
BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express or implied. See the
License for the specific language governing permissions and limitations under the License.
*/

module.exports={
  data:function(){
    return {}
  },
  components:{
  },
  created:function(){
    var self=this
    self.$store.dispatch('user/login')
    .then(function(){
      self.$router.replace({name:'home'})
    })
    .catch(error=>{
      self.$router.replace({name:'error',params:{message:error}})
    })
  },
  methods:{
  }
}
</script>
