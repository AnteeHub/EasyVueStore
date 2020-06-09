<template>
  <v-card class="mx-auto my-12" max-width="95%" :light="true">
    <slot name="img"><v-sheet height="150" color="pink"></v-sheet></slot>
    <v-card-title class="text-center">
      <slot name="title">
        <div class="text-center" style="width:100%;">餐厅名：暂无</div>
      </slot>
    </v-card-title>
    <v-card-text class="text-center">
      <slot name="addr">
        <div class="text-center" style="width:100%;">地址：暂无</div>
      </slot>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <div @click.stop.prevent="showOverlays($event)">
      <v-card-subtitle>点击进入餐厅点餐</v-card-subtitle>
      <v-card-text class="text-center">
        <v-container>
          <v-row span="subtitle-1">
            <v-col cols="6">
              <slot name="info-1">
                当前排队人数
              </slot> </v-col
            ><v-col cols="6" class="info-value-strong">
              <slot name="info-1-value">
                -
              </slot>
            </v-col>
          </v-row>
          <v-row span="subtitle-1">
            <slot name="shopStatus">
              <v-col cols="6">
                <slot name="info-2">餐厅状态</slot>
              </v-col>
              <v-col cols="6" class="info-value-strong">
                <slot name="info-2-value">暂无</slot>
              </v-col>
            </slot>
          </v-row>
        </v-container>
      </v-card-text>
    </div>
    <v-fade-transition>
      <v-overlay :value="overlays" absolute color="#036358">
        <v-col cols="12">
          <v-btn large block color="pink">进入餐厅</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn large block color="info" @click.stop.prevent="closeOverlays"
            >取消</v-btn
          >
        </v-col>
      </v-overlay>
    </v-fade-transition>
    <v-fade-transition>
      <slot name="useableOverlays"> </slot>
    </v-fade-transition>
  </v-card>
</template>
<script>
export default {
  name: "ShopCard",
  data() {
    return {
      overlays: false,
      useable: false
    };
  },
  methods: {
    showOverlays(ev) {
      this.overlays = true;
      console.log(this.overlays);
      // ev.cancelBubble=true;
    },
    closeOverlays() {
      this.overlays = false;
      console.log("aaaa");
      console.log(this.overlays);
    }
  }
};
</script>

<style lang="less" scoped>
.info-value-strong {
  font-size: 1.5em;
  font-weight: 600;
}
</style>