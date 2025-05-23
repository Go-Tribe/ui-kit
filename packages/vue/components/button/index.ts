import type { App } from 'vue';
export * from './src/button-types';
import Button from './src/button.vue';
import { ButtonName } from './src/button-types';
export { Button };

export default {
  title: 'Button 按钮',
  category: '基础组件',
  status: '100%',
  install(app: App): void {
    app.component(ButtonName, Button);
  }
};