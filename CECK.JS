function dot_product(v1, v2) {
    // Check if the length of v1 is equal to the length of v2
    if (v1.length !== v2.length) {
        console.error("Error: Vectors v1 and v2 must have the same length");
        return null; // Exit the procedure with an error
    }

    // Initialize a variable ps (dot product) to 0
    let ps = 0;

    // Iterate through the elements of v1 and v2
    for (let i = 0; i < v1.length; i++) {
        // Calculate the product of the corresponding elements and add it to ps
        ps += v1[i] * v2[i];
    }

    // Return the dot product ps
    return ps;
}

// Example usage:
const vector1 = [1, 2, 3];
const vector2 = [4, 5, 6];
const result = dot_product(vector1, vector2);
console.log("Dot Product:", result);
