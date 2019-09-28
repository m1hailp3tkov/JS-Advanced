function solve(input){

    let systems = new Map();

    for(let i of input){
        let token = i.split(/\s+\|\s+/);
        let system = token[0]
        let component = token[1]
        let subcomponent = token[2]
        if(!systems.get(system)){
            systems.set(system, new Map());
        }
        if(!systems.get(system).get(component)){
            systems.get(system).set(component, [])
        }
        systems.get(system).get(component).push(subcomponent);
    }
    let systemSorted = Array.from(systems.keys()).sort((s1, s2) => sortSytems(s1, s2));

    for(let system of systemSorted){
        console.log(system)

        let componentSorted = Array.from(systems.get(system).keys()).sort((c1,c2) => sortComponents(system, c2,c1));

        for(let comp of componentSorted){
            console.log("|||"+comp);

            systems.get(system).get(comp).forEach(sc => console.log("||||||"+sc));
        }
    }

    function sortComponents(system, c2,c1){
       return systems.get(system).get(c2).length - systems.get(system).get(c1).length;
    }
    function sortSytems(s1, s2){
        if(systems.get(s1).size != systems.get(s2).size){
            return systems.get(s2).size - systems.get(s1).size;
        }
        else{
            return s1.toLowerCase().localeCompare(s2.toLowerCase())
        }
    }


}
solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])