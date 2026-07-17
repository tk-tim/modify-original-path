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
						if (!jsonPayload) return

						const escapedSlash = '\\\\u002F'
					console.log('Original URL before replacement:', String(jsonPayload.innerHTML))
						console.log('has', String(jsonPayload.innerHTML).includes(escapedSlash))
						jsonPayload.innerHTML = String(jsonPayload.innerHTML).replace(escapedSlash, escapedSlash + '?cstrackid=123')
					console.log('Original URL after replacement:', jsonPayload.innerHTML)
				}, 0)
			`,
			},
		],
	})
})
