class User {
  constructor() {
    this.curUser = {
      UserID: 666,
      name: 'aaa'
    }
    this.userMap = new Map([
      [666, { UserID: 666,
        name: 'aaa'}]
    ]);
  }

  getLocalUser() {
    return this.userMap.get(this.curUser.UserID);
  }
}
export default new User();
