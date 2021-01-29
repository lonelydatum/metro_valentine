const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}


function transformOrigin(id, percent){
	const el = document.getElementById(id)
	const w = el.offsetWidth
	const h = el.offsetHeight
	const transformOrigin = {
		x: w*percent.w,
		y: h*percent.h
	}
	const pos = {
		x: -transformOrigin.x/2,
		y: -transformOrigin.y/2,
	}
	
	const result = {
		transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
		...pos
	}

	return result
}

TweenLite.defaultEase = Power2.easeInOut

export {size, transformOrigin}