const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//incomingStudents.reduce(function(houses, student) { houses[sortingHat.assign(student)].push(student)}, hogwartsHouses)

const totalBatteries = batteryBatches.reduce(function(total,batches) {
  return batches + total
}
)