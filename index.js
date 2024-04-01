import { AppRegistry } from 'react-native';
import MainApp from './App'; // 导入修改后的组件名称

// 注册主组件
AppRegistry.registerComponent('wk1', () => MainApp); // 使用修改后的组件名称

// 确保其他逻辑在注册主组件之后执行
