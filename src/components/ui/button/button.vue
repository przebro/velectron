<template>
  <button @click="onClick" :class="classT">
      <span v-if="this.$attrs['toolbutton'] !== ''">{{text}}</span><span v-if="classI!=''" :class="classI"></span>
    </button>
</template>

<script>

export default {
    name : "UiBtn",
    props:["text","color","icon"],
    data(){
        return {
        }
    },
    attrs :{
        abc :"sdsad"
    },
    computed:{
        classT(){
            let cls = ""
            if (this.$attrs['toolbutton'] === "") {
                cls +=  "ui-tool-btn"
            }else{
                cls = cls +" "+ (this.color == undefined ? "primary" : this.color)
                cls += " ui-btn"
            }
            
            return cls
        },
        classI(){
            if (this.icon!=="" && this.icon!== undefined){
                return "icon mdi mdi-" + this.icon
            }
            return ""
        }
    },
    methods:{
        onClick(){
            this.$emit("click")
        }
    }
}
</script>

<style lang="scss">
@import "../../../sass/variables.scss";


button {
    outline-style: none;
    border-radius:1px;
    -webkit-font-smoothing: antialiased;
    border: none;
    font-size: $ui-font-size;
    user-select: none;
}

.ui-btn{
    padding: .6em 1.25em;
    margin: 2px;
    height: 32px;
}

.ui-tool-btn{
    padding: .25em;
    margin: 2px;
    color: gray;
    background-color: transparent;
    border : solid transparent 1px;
    
}

.tool-btn .icon{
    margin-right: 6px;
}
.tool-btn:active{
    border : solid transparent 1px;
}
.tool-btn:hover span{
    color: white;
}


.tool-btn span{
    color: gray;
}

.icon{
    margin-left: 6px;
}
</style>>

