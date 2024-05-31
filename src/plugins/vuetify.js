import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#7ecc18"
      },
      dark: {
        primary: "#395c0b"
      }
    }
  }
});
