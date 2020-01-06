export class BasicClass {

  myBasicClass: string = "my basic class string";

  voidThis(this: void) {
  // make sure `this` is unusable in this standalone function
  }

  myBasicClassFunction(){
    return "my Basic Class Function returned"
  }
}
