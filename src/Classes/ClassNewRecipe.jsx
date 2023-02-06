export default class RecipeData {
    constructor(name, ingredients, instructions ,id) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.favorite = false;
        this.id = id;
    }

    favo() {
        this.favorite === false ? this.favorite = true : this.favorite = false;
    }
}