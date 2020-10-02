export class ProfessionalCustomService{

  constructor() { }

  /* Default value : Enterprise */
  // tslint:disable-next-line:variable-name
  private Enterprise_Name = 'MIM' ;
  /* Default value : null */
  // tslint:disable-next-line:variable-name
  private Enterprise_Logo = 'https://pbs.twimg.com/profile_images/1109051430713860096/-rs4R4b1_400x400.png';


  get getEnterprise_Name(): string {
    return this.Enterprise_Name;
  }

  get getEnterprise_Logo(): string {
    return this.Enterprise_Logo;
  }
}
