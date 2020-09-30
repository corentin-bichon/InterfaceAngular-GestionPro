export class AuthService {

  isAuth = false;

  // tslint:disable-next-line:typedef
  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 10
        );
      }
    );
  }

  // tslint:disable-next-line:typedef
  signOut() {
    this.isAuth = false;
  }

  // tslint:disable-next-line:typedef
  getAuth() {
    return this.isAuth;
  }
}
