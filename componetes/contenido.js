export default {
    name: "my-contenido",
    template:/*html*/`
    <section class="main">
    <div class="main-text">
        <h1 v-html="config.titulo"></h1>
        <button type="button">Our Service</button>
    </div>
</section>

<div class="left">
    <img :src="config.img2" alt="">
</div>

<div class="right">
    <img :src="config.img2" alt="">
</div>
    `,
    props: {
        config: Object
    }
}