<script setup>
</script>

<template>
	<div class="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
		<div
			class="h-4 bg-gray-800 animate-progress rounded-full"
			:style="`width: 50%; animation-duration: 1.2s`"
		></div>
	</div>
</template>

<style>
  @keyframes progress {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .animate-progress {
    animation-name: progress;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
</style>