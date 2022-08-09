interface UserInterface {
  getFullname(): string;
}

class User implements UserInterface {
  // by default, variables are PUBLIC
  firstName: string;
  private lastName: string;
  readonly unchangableName: string; // readonly is great for setting constants
  static readonly maxAge = 50; // static prop is on the Class itself

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  getFullname(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Admin extends User {
  private editor: string;
  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user = new User("Ian", "Miller");
console.log(user.firstName);
console.log(User.maxAge);

const admin = new Admin("Foo", "Bar");
console.log(admin.firstName);
