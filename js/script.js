
	document.getElementById('inputNumber').addEventListener('input',function (event) {
	 var input=event.target.value;

	document.getElementById('gramOutput').innerHTML= input / 0.0022046;
		document.getElementById('kiloOutput').innerHTML= input/2.2046 ;
		document.getElementById('pounceOutput').innerHTML= input * 16;


	 });


