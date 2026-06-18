export default defineNuxtPlugin(() => {
	useHead({
		script: [
			{
				type: 'text/javascript',
				id: 'original-url-replace',
				tagPosition: 'bodyClose',
				innerHTML: `
				setTimeout(() => {
					const jsonPayload = document.getElementById('__NUXT_DATA__')
					console.log('Original URL before replacement:', jsonPayload.innerHTML.includes('utm=123'))
					jsonPayload.innerHTML = jsonPayload.innerHTML.replace('?utm=123', '')
					console.log('Original URL before replacement:', jsonPayload.innerHTML)
				}, 0)
			`,
			},
		],
	})
})
