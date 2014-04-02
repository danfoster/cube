function side() {
    return polyhedron({     
        points: [ 
                    [0,50,0], [9,50,0], [48,50,0],
                    [0,0,0],  [9,0,0],  [48,0,0],
                              [9,50,9], [48,50,9],
                              [9,0,9],  [48,0,9]
        ],
        polygons: [
            [1,4,5,2], // Base
            [0,3,4,1], // Base Slope
            [6,7,9,8], // Top
            [4,8,9,5], [2,7,6,1], [5,9,7,2], //Sides
            [0,6,8,3], // Slope
            [3,8,4], [1,6,0] // Corners
        ]
    });
}

function main() {
    return side().subtract(sphere({r: 147.611, fn: 120 }).translate([134,25,117]));
}
