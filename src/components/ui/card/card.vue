<template>
  <div :class="classT" :style="styleT">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name : "UiCard",
    props:{
        width : Number,
        height: Number,
        color : String
    },
    computed:{
        classT(){
            
            let cls = "ui-card"
            cls += this.$attrs['transparent'] == undefined ? "": " transp"
            cls += this.$attrs['flex'] == undefined ? "":" ui-card-flex "
            return  cls;
        },
        styleT(){
            let st = ""
            st += this.width > 0 ? "width:"+this.width + "px;":"";
            st += this.height > 0 ? "height:"+ this.height + "px;":"";
            st += this.color !== "" ? "background-color:"+this.color:"";
            return st
        }
    }

}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}
.ui-card{
    display: flex;
    padding: 5px;
}
.ui-card-flex{
    flex-grow: 1;
}
.ui-card-row{
    flex-direction: row;
}
.ui-card-column{
    flex-direction: row;
}

.transp{
    background-color: transparent !important;
}

</style>