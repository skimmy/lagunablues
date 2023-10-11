export function csvSubMenuToJSON(csvText) {
    const lines = csvText.split(/\r?\n/);
    const header = lines[0].split("\t");
    // determined dynamically because of the note columns may vary in number
    const ingredientsIndex = header.indexOf("Ingredienti");
    const items = lines.slice(1).map((item) => {
        const propArray = item.split("\t");
        return {
            number: parseInt(propArray[0]), // Num
            type: propArray[1], // Categoria
            subType: propArray[2], // SottoCat
            name: propArray[3], // Nome
            price: parseFloat(propArray[4].replace(",", ".")), // Prezzo
            notes: propArray.slice(5, ingredientsIndex).map( note => note !== ""), // A,B,... 
            description: propArray.slice(ingredientsIndex).filter(item => item.trim() !== ""),
        }
    })

    // The following code creates the hierarchical data from the flat csv rows.
    //   Category (e.g., Nudeln) 
    //     -> SubCategory (e.g., Spaghetti)
    //       -> Item (e.g., Carbonara)
    // Some categories don't have subcategory, they are still under the '' subcategory.
    const grouped = {};
    for (const item of items) {
        const category = item.type;
        const subCategory = item.subType;
        if (!grouped[category]) {
            grouped[category] = {};
        }
        if (!grouped[category][subCategory]) {
            grouped[category][subCategory] = [];
        }
        grouped[category][subCategory].push(item);
    }
    return grouped;
}