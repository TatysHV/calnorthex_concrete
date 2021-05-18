<template>
  <section class="main-description container my-10">
    <div class="main-description-wrap d-flex flex-column flex-md-row">
      <v-col class="main-info" pa="0">
				<p class="info-title">
					This is only a little text about something great that you can offer to your clients
				</p>
        <p>
          Velit elit ad consequat nulla id adipisicing quis dolor. Anim sunt nostrud ex aliqua id enim officia. Veniam laboris occaecat incididunt ut commodo Lorem nisi tempor deserunt ullamco dolore magna. Ipsum Lorem non labore quis incididunt. Consectetur voluptate nulla tempor amet magna minim aliqua.
        </p>
				<div class="squares">
					<div class="square-red"></div>
					<div class="square-gray"></div>
				</div>
      </v-col >
      <v-col class="complement pa-0">
				<div class="bg-portrait"></div>
      </v-col>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.main-description-wrap
	width: 100%
	height: auto
	.main-info
		width: 100%
		padding: 1rem
		height: 100% 
		font-size: 1.3rem
		color: $soft-black
		text-align: center
		min-height: 650px 
		@include laptop 
			min-height: 600px 
			text-align: left

		.info-title 
			font-size: 2rem
			font-weight: 600
			color: $base-red

	.complement  
		position: relative
		width: 100%
		padding: 1rem
		min-height: 600px 
		.bg-portrait
			position: relative
			width: 100%
			height: 75vh
			margin: auto
			background: url('../assets/images/splash02.jpg')
			background-size: cover 
			background-position: center
			z-index: 9
			@include laptop
				width: 95%
				height: 97%

		&:before
			@include laptop
				content:''
				width: 90%
				height: 95%
				margin: auto
				z-index: 1
				position: absolute
				background-color: $base-red 
				right: 0px
				bottom: 0px
			
	.squares 
		position: relative
		display: flex 
		flex-direction: row 
		justify-content: center
		align-content: center
		width: 100% 
		margin-top: 50px
		margin-bottom: 30px
		opacity: 0.8
		min-height: 80px
		@include laptop
			margin-top: 50px
		.square-red
			position: absolute
			width: 50px
			height: 50px 
			border: 5px solid $base-red 
			transform: rotate(45deg)
			right: calc(50% - 10px)
		.square-gray
			position: absolute 
			width: 50px
			height: 50px 
			border: 5px solid $base-gray
			transform: rotate(45deg)
			left: calc(50% - 10px)
			z-index: 2

</style>