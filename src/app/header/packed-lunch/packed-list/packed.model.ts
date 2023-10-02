export class Package {
    public name: string;
    public description: string;
    public imagePath: string;
    constructor(name:string, description:string,imagePath:string) {
        this.description = description;
        this.imagePath = imagePath;
        this.name = name;
    }
}