Vue.createApp({
  data() {
    return {
      name: "", // 入力値
      upperName: "", // 表示する値
    };
  },
  // 遅延処理用のメソッド
  created() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  // name プロパティが変化したときに呼び出し
  watch: {
    name(newValue, oldValue) {
      this.delayFunc();
    },
  },
  methods: {
    // nameの値を大文字に変換したものをupperNameプロパティに設定
    getUpper() {
      this.upperName = this.name.toUpperCase();
    },
  },
}).mount("#app");
