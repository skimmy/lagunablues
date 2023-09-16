export function csvSubMenuToJSON(csvText) {
    const lines = csvText.split(/\r?\n/);
    const header = lines[0].split("\t");
    const ingredientsIndex = header.indexOf("Ingredienti");
    // console.log(header.indexOf("Ingredienti"));
    const items = lines.slice(1).map((item) => {
        const propArray = item.split("\t");
        // console.log(propArray);
        return {
            number: parseInt(propArray[0]),
            type: propArray[1],
            name: propArray[3],
            price: parseFloat(propArray[4].replace(",", ".")),
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