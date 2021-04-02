var ParkingSystem = function(big, medium, small) {
    this.carLimits = [big, medium, small];
};
 
ParkingSystem.prototype.addCar = function(carType) {
    carType--;
    if (this.carLimits[carType] === 0) {
        return false;
    }
    this.carLimits[carType]--;
    return true;
};