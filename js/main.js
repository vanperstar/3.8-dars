var elForm = document.querySelector('.form');
var elDistanceInput = elForm.querySelector('.form-input');
var elPedestrianResult = elForm.querySelector('.result-pedestrian');
var elBikeResult = elForm.querySelector('.result-bike');
var elCarInput = elForm.querySelector('.result-car');
var elPlaneInput = elForm.querySelector('.result-plance');

// Speed
var speedPedestrian = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;

function calculateTime(distance, speed) {
	var hour = Math.floor(distance / speed);
	var minute = Math.floor((distance / speed - hour) * 60);
	var second = Math.floor(((distance / speed - hour) * 60 - minute) * 60);
	// return hour + ' soat ' + minute + ' minut ';
	return hour + ' soat ' + minute + ' minut ' + second + 'secund';
}

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var distanceInput = Number(elDistanceInput.value.trim());

	// Early return
	if (distanceInput <= 0 || isNaN(distanceInput)) {
		elDistanceInput.classList.add('alert-input');
		return;
	} else {
		elDistanceInput.classList.remove('alert-input');
	}

	elPedestrianResult.textContent = calculateTime(
		distanceInput,
		speedPedestrian,
	);

	elBikeResult.textContent = calculateTime(distanceInput, speedBike);
	elCarInput.textContent = calculateTime(distanceInput, speedCar);
	elPlaneInput.textContent = calculateTime(distanceInput, speedPlane);
});

