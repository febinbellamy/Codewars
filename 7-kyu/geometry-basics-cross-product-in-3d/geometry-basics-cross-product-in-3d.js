function crossProduct(v1, v2) {
  const newX = (v1["y"] * v2["z"]) - (v1["z"] * v2["y"]);
  const newY = -((v1["x"] * v2["z"]) - (v1["z"] * v2["x"]));
  const newZ = (v1["x"] * v2["y"]) - (v1["y"]*v2["x"]);
  return {x: newX === -0 ? 0 : newX, y: newY === -0 ? 0 : newY, z: newZ}
}