 let map = new Map();
// console.log(map);

// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');
// map.set(4, 'four');
// map.set(5, 'five');
//  console.log(map);

let likar = {id: 'likar'};
let slon = {id: 'slon'};
let krot = {id: 'krot'};

map.set('likar', {name: 'roma', surname: 'ivanov'});
map.set('krot', {name: 'vasya', surname: 'petrov'});
map.set('slon', {name: 'oleg', surname: 'olegov'});
 console.log(map);

 console.log(map.get('likar'));

 // map.delete('likar');
 // console.log(map);

 // map.clear()
 // console.log(map);

 console.log(map.size);
 console.log(map.keys());

 let from = Array.from(map.keys());
 console.log(from);

 console.log(map.values());
 console.log(Array.from(map.values()));


