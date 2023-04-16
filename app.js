import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import main from './main.js';
import contenido from './componetes/contenido.js';
import nav from './componetes/nav.js';
let app = createApp(main);

app.component(nav.name, nav);
app.component(contenido.name, contenido);

app.mount("#app");
