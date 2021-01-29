

function start(){
	TweenLite.defaultEase = Power2.easeOut
	const TIME = .4
	const read = {
		t1: 2.5,
		t2: 2,
		t3: 2,
		t4: 2
	}
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	

	tl.from(".t1", TIME, {opacity:0, y:"+=50"}, "+=.2")

	tl.add('t1-out', `+=${read.t1}`)

	tl.to(".t1", TIME, {x:"-=180", opacity:0}, "t1-out")
	tl.to(".heart", TIME, {x:0}, "t1-out")
	tl.from(".logo", TIME, {opacity:0}, "t1-out")

	
	tl.add("bloom")
	tl.from(".rose", .6, {scale:0}, "bloom")
	tl.from(".t2_rose", .5, {x:"+=180", opacity:0}, "bloom")


	
	tl.to(".t2_rose", TIME, { opacity:0}, `+=${read.t2}`)

	tl.add('choc', "+=.1")

	tl.from([".t3_choc"], TIME, {x:"+=180", opacity:0}, "choc")
	tl.from([".choc"], TIME, {x:"+=180", opacity:0}, "choc")

	tl.to(".t3_choc", TIME, { opacity:0}, `+=${read.t3}`)

	tl.from(".t4_points", TIME, { opacity:0}, "+=.1")
	tl.to(".t4_points", TIME, { opacity:0}, `+=${read.t4}`)

	tl.from(".t5a", TIME, {x:"+=180", opacity:0}, "+=.1")
	tl.from(".t5b", TIME, {x:"+=180", opacity:0}, "-=.1")

	tl.from(".cta", TIME, {opacity:0}, "+=.3")
	const tl_cta = new TimelineMax({repeat:7, yoyo:true})
	tl_cta.to(".cta.chev", .3, {x:"+=4", ease:Power1.easeOut})
	tl.add(tl_cta)
	
}

start()