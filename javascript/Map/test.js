import map_proto from "./map_proto";

let user = map_proto.getLocalUser();
console.log(user);
map_proto.userMap.set(222, {UserID: 222,
  name: 'bbb'})

  console.log(user);