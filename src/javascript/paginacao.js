itemslist = ["a","b","c","d","e","f","g","h","i","j"] 

function listItems(items, pageActual, limitItems){
    let result = [];
    let totalPage = Math.ceil( items.length / limitItems );
    let count = ( pageActual * limitItems ) - limitItems;
    let delimiter = count + limitItems;
    
    if(pageActual <= totalPage){
        for(let i=count; i<delimiter; i++){
            if(items[i] != null){
                result.push(items[i]);
            }
            count++;
        }
    }

    return result;
};

console.log(listItems(itemslist,3,3))