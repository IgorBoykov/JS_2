var employeeSalaries = {
	worker1 : 3000,
	worker2 : 5000,
	worker3 : 4200
}
console.log(employeeSalaries);

var sum = 0;
for ( var key in employeeSalaries) {
	sum += employeeSalaries[key];
}
console.log(sum);