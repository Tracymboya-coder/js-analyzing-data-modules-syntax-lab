
function combineUsers(...args) {
    // Initialize the return object with an empty users array
    let combinedObject = {
        users: []
    };

    // Iterate through the provided arrays (args)
    // Task: Loop through args to isolate each array
    args.forEach(userArray => {
        // Use the spread operator to push all elements from the current array
        // into the combinedObject.users array
        combinedObject.users.push(...userArray);
    });

    // Generate the current date using datejs in the requested M/d/yyyy format
    // Task: Add attribute merge_date to combinedObject
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Return the final object containing all merged users and the timestamp
    return combinedObject;
}

// Export the function so it can be imported by the test suite (npm test)

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};