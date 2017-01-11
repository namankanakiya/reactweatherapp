var names = ['Andrew', 'Julie', 'John'];
names.forEach(function(name) {
	console.log('foreach', name);
});

names.forEach((name) =>  {
	console.log('arrowFunc', name);
})

names.forEach((name) => console.log('arrowFunc', name));