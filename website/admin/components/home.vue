<template lang='pug'>
  div 
    v-card
      v-card-title(primary-title)
        h2 Welcome to SageGuard
      v-card-text
        .subheading from here you can create, remove, and manager users,groups and notebook instances.
      v-card-actions
        temp( 
          v-for="template in templates"
          :template="template"
          :href="template.href"
        )
    v-container(grid-list-sm)
      v-layout(row wrap)
        v-flex(v-if="pages.length===0")
          v-progress-linear(indeterminate) 
        v-flex.xs4(v-for="page in pages")
          v-card(height="200px")
            v-card-title {{page.name}}
            v-card-text
              p {{page.prompt}}
            v-card-actions
              v-spacer
              v-btn(:href="'#/home/'+page.name") go to
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
    temp:require('./template.vue')
  },
  computed:{
    pages:function(){
      return _.get(this,"$store.state.data.links.items",[])
        .filter(x=>x.rel==="collection")
    },
    templates:function(){
      return _.get(this,"$store.state.data.links.template",[])
    }
  },
  created:async function(){
    var self=this
    await self.$store.dispatch('data/init')
  },
  methods:{
  }
}
</script>
