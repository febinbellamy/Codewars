/* 
7 kyu

In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

For example: Input structure:
[
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]

Output should be:
[
  {
    name: "Bob",
    points: 130,
    position: 1,
  },
  {
    name: "Kate",
    points: 120,
    position: 2,
  },
  {
    name: "Mary",
    points: 120,
    position: 2,
  },
  {
    name: "John",
    points: 100,
    position: 4,
  },
]
*/

function ranking(people) {
  if (people.length === 0) return [];

  people.sort((objA, objB) => {
    if (objA.points < objB.points) return 1;
    if (objA.points > objB.points) return -1;
    if (objA.name < objB.name) return -1;
    if (objA.name > objB.name) return 1;
  });

  let position = 1;
  people[0]["position"] = 1;
  position++;

  for (let i = 1; i < people.length; i++) {
    let currentObj = people[i];
    let previousObj = people[i - 1];

    if (previousObj.points === currentObj.points) {
      currentObj["position"] = previousObj["position"];
    } else {
      currentObj["position"] = position;
    }
    position++;
  }

  return people;
}
