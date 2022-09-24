const all =document.querySelector(".all"),
but=all.querySelector(".in button"),
inp=all.querySelector(".in input"),
qrimg=all.querySelector(".out img");

but.addEventListener("click",()=>{
	let qrval=inp.value;
	if(!qrval) return;
	but.innerText="Generating QR Code..."
	qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrval}`;
	qrimg.addEventListener("load",()=>{
		all.classList.add("active");
		but.innerText="Generator QR Code";
	});
});