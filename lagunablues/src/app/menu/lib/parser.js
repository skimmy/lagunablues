export function csvSubMenuToJSON(csvText) {
    const lines = csvText.split(/\r?\n/);
    const header = lines[0].split("\t");
    const ingredientsIndex = header.indexOf("Ingredienti");
    const items = lines.slice(1).map((item) => {
        const propArray = item.split("\t");
        return {
            number: parseInt(propArray[0]),
            type: propArray[1], // Categoria
            subType: propArray[2], // SottoCat
            name: propArray[3], // Nome
            price: parseFloat(propArray[4].replace(",", ".")), // Prezzo
            description: propArray.slice(ingredientsIndex).filter(item => item.trim() !== ""),
        }
    })
    const grouped = {};
    for (const item of items) {
        const category = item.type;
        if (!grouped[category]) {
            grouped[category] = []
        }
        grouped[category].push(item);
    }
    return grouped;
}