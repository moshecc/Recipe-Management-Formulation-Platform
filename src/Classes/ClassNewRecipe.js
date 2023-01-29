class NewRecipe {
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        favorite = false;
        id = null;
    }
    constructor(name) {
        this.name = name;
        favorite = false;
        id = null;
    }

    favo() {
        favorite === false ? favorite = true : favorite = false;
    }
}