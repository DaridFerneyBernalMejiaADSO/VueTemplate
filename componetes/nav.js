export default {
    name: "my-superior",
    template: /*html*/`
    <header>
		<a href="#" class="logo">< <img :src="config.img1" alt=""></a>
		<div class="bx bx-menu" id="menu-icon"></div>
		
		<ul class="navlist">
			<li><a href="#" class="active" v-text="config.enlaces[0]"></a></li>
			<li><a href="#"  v-text="config.enlaces[1]"></a></li>
			<li><a href="#"  v-text="config.enlaces[2]"></a></li>
			<li><a href="#"  v-text="config.enlaces[3]"></a></li>
			<li><a href="#"  v-text="config.enlaces[4]"></a></li>
			<li><a href="#"  v-text="config.enlaces[5]"></a></li>
		</ul>
	</header>
`,
    props: {
        config: Object
    }
}