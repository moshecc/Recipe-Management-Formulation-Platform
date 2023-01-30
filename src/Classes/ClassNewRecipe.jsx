export default class RecipeData {
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.favorite = false;
        this.id = null;
    }
    
    // constructor(name) {
    //     this.name = name;
    //     favorite = false;
    //     id = null;
    // }

    favo() {
        this.favorite === false ? this.favorite = true : this.favorite = false;
    }
}