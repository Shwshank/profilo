export class Project{
  public imagePath: String;
  public name : String;
  public description : String;
  public resposciblities : String;
  public technologies: String;
  public details : String;

  constructor(  imagePath: String, name:String, description: String, resposciblities : String, technologies: String, details: String ){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.resposciblities = resposciblities;
    this.technologies = technologies;
    this.details = details;
  }
}
