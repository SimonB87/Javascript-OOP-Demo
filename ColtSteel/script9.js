//Constructor functions
//We can use a function as a blueprint for what each house should be - we call these kinds of functions "construcotr" functions.

function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = House(2,2,1000);
firstHouse // returns: undefined, because we are missing a key word "new"

//Details, what "new" does can be found in this section ".md" file

var firstHouse = new House(2,2,1000);
firstHouse // returns: House {bedrooms: 2, bathrooms: 2, numSqft: 1000}

firstHouse.bedrooms // reurns: 2
firstHouse.numSqft // returns: 1000