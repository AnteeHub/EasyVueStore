<template>
  <mu-container>
    <mu-flex class="flex-wrapper" align-items="center">
      <mu-flex class="flex-demo" justify-content="center" fill>
        <mu-button icon large color="#00bcd4" @click="minusNum">
          <mu-icon value="remove_circle"></mu-icon>
        </mu-button>
      </mu-flex>
      <mu-flex class="flex-demo" justify-content="center" aling-items="center" fill>
        <div class="counter-text">
          <input type="number" autocomplete="off" :value="thisCounter" />
        </div>
      </mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>
        <mu-button icon large color="#00bcd4" @click="addNum">
          <mu-icon value="add_circle"></mu-icon>
        </mu-button>
      </mu-flex>
    </mu-flex>
  </mu-container>
</template>
<script>
export default {
  name: "StepCounter",
  data() {
    return {
      thisCounter: 0
    };
  },
  methods: {
    validateNum(num) {
      return num > 99 ? 99 : num < 0 ? 0 : num;
    },
    addNum() {
      this.thisCounter++;
      if (this.thisCounter > 99) {
        this.thisCounter = 99;
      }
    },
    minusNum() {
      this.thisCounter--;
      if (this.thisCounter < 0) {
        this.thisCounter = 0;
      }
    }
  },
  mounted() {
    this.thisCounter = this.cValue;
  },
  props: ["cValue"]
};
</script>

<style lang="less" scoped>
.counter-text {
  margin: 0 2px;
  width: 40px;
  input {
    width: 100%;
    outline: none;
    -webkit-apperance: normal;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    background-color: transparent;
    text-align: center;
    border-style: none;
    border: 2px solid gray;
    border-radius: 5px;
    padding: 10px 2px;
    font-size: 1.2em;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
}

</style>