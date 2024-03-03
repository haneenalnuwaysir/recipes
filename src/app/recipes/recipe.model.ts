import { Ingradient } from "../shared/ingradient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;
    public ingradients: Ingradient[]
    

    constructor(name: string, desc: string, imgPath: string, ingradients: Ingradient[]){
        this.name = name;
        this.description = desc;
        this.imgPath =imgPath;
        this.ingradients = ingradients
    }
}