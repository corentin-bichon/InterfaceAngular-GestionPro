export class ProfessionalCustomService{

  constructor() { }

  /* Default value : Enterprise */
  private enterpriseName = 'Move in Med' ;

  /* Default value : "" */
  private enterpriseShortName = 'MIM' ;

  /* Default value : null */
  private enterpriseLogo = 'https://pbs.twimg.com/profile_images/1109051430713860096/-rs4R4b1_400x400.png';



  get getEnterprise_Name(): string {
    return this.enterpriseName;
  }

  get getEnterpriseShortName(): string {
    return this.enterpriseShortName;
  }

  get getEnterprise_Logo(): string {
    return this.enterpriseLogo;
  }
}
