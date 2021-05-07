<template>
  <section class="main-banner">
    <div class="filter-layout"></div>
    <div class="info-banner">
      <h1>{{ title }}</h1> 
      <p>{{ description }}</p> 
      <a href="#">{{ ctaBtn }}</a>
    </div>

  </section>
</template>
<script>

export default {
  name: 'MainBanner',
  data() {
    return {
      title: 'Calnorthex Concrete',
      description: 'Velit velit dolore mollit proident ea ipsum cupidatat nulla irure nisi ad sit minim sunt. Proident culpa eiusmod excepteur fugiat mollit minim in ullamco dolor enim in in. Veniam proident id dolore Lorem non officia deserunt quis. Commodo eiusmod aliquip anim duis qui nostrud labore elit aliqua ex et proident.',
      ctaBtn: 'Show more',
    }
  },
}
</script>
<style lang="sass">
.main-banner 
	position: relative
	display: flex 
	flex-direction: column 
	justify-content: center 
	align-items: center
	width: 100% 
	height: 70vh
	animation: banner 20s infinite linear alternate
	background-size: 100% 100% 

	.filter-layout 
		position: absolute 
		width: 100% 
		height: 100% 
		top: 0
		left: 0
		background-color: rgb(0 34 47 / 45%)

	.info-banner 
		width: 100% 
		max-width: 550px 
		text-align: center
		z-index: 1
		h1
			color: white 
			font-size: 2rem 
			margin-bottom: 20px 
			letter-spacing: 1px

		p 
			color: #c7c7c7 
			line-height: 1.7 
			margin-bottom: 30px

		a 
			color: white 
			text-decoration: none 
			background-color: $base_red 
			padding: 15px 35px 
			display: inline-block
			border-radius: 50px


@keyframes banner 
	0%, 20%
		background-image: url("https://fondosmil.com/fondo/12406.jpg")
	
	25%, 45%
		background-image: url("https://www.todopaisajes.com/Minis/ciudad-de-noche.jpg")
	
	50%, 70%
		background-image: url("https://i.pinimg.com/originals/b9/1d/fd/b91dfdd21cf816a69ed544d6800680a4.jpg")
	
	75%, 100%
		background-image: url("https://i.pinimg.com/originals/55/5e/52/555e52ca50443a4d366858dc5c83d540.jpg")

	
	
</style>
