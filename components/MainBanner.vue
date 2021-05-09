<template>
  <section class="main-banner" id="home">
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
      title: 'CALNORTHEX CONCRETE',
      description: 'Velit velit dolore mollit proident ea ipsum cupidatat nulla irure nisi ad sit minim sunt. Proident culpa eiusmod excepteur fugiat mollit minim in ullamco dolor enim in in.',
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
	background-size: auto 100%
	background-position: center
	@include laptop
		background-size: 100% 100% 

	.filter-layout 
		position: absolute 
		width: 100% 
		height: 100% 
		top: 0
		left: 0
		background-color: rgb(0 0 0 / 45%)

	.info-banner 
		width: 100% 
		max-width: 350px 
		text-align: center
		z-index: 1
		@include laptop 
			max-width: 800px

		h1
			color: white 
			font-size: 1rem 
			margin-bottom: 20px 
			letter-spacing: 1px
			text-align: center
			@include laptop
				font-size: 2rem 

		p 
			color: #fff
			line-height: 1.2
			margin-bottom: 30px
			font-size: 1.3rem
			font-weight: 500
			text-align: justify
			@include laptop 
				font-size: 1.6rem
				text-align: center

		a 
			color: white 
			text-decoration: none 
			background-color: $base-red 
			padding: 15px 35px 
			display: inline-block
			border-radius: 50px
			font-weight: 500
			text-align: center


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
