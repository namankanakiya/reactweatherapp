/*function getTempCallback (location, callback) {
	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Atlanta', function(err, temp) {
	if (err) {
		console.log('error', err);
	} else {
		console.log('success', temp);
	}
});

function getTempPromise (location) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(79);
			reject('City not Found');
		}, 1000);
	});
}

getTempPromise('Atlanta').then(function (temp) {
	console.log('promise success', temp);
}, function (err) {
	console.log('promise error', err);
})*/

//Challenge Area

function addPromise(a,b) {
	return new Promise (function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('One or both are not numbers');
		}
	});
}

addPromise(2,3).then(function(sum) {
	console.log('success', sum);
}, function(err) {
	console.log('err', err);
})

addPromise('andrew',3).then(function(sum) {
	console.log('success', sum);
}, function(err) {
	console.log('err', err);
})
