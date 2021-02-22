import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

/**
 *  ! 할 일 관리앱 (crud)
 *  - 할 일 조회,추가,삭제
 *  - 할 일 수정
 */