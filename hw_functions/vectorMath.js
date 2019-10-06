solution =
{
    add: (vec1,vec2) => [vec1[0] + vec2[0], vec1[1] +vec2[1]],
    multiply: (vec, scalar) => [vec[0]*scalar, vec[1] * scalar],
    length: (vec) => Math.sqrt(vec[0]**2+vec[1]**2),
    dot: (vec1, vec2) => vec1[0]*vec2[0] + vec1[1]*vec2[1],
    cross: (vec1, vec2) => vec1[0]*vec2[1] - vec2[0] * vec1[1]
};