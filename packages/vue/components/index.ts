import { Button, ButtonName } from './button/index'
import '../styles/main.css'
import { App } from 'vue'
const components = {
    [ButtonName]: Button
}
export default {
    install(app: App) {
        Object.entries(components).forEach(([name, component]) => {
            return app.component(name, component)
        })
    }
}