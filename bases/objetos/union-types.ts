(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Jose';
    console.log(typeof myCustomVariable);
    
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    
    myCustomVariable = {
        name:'Bruce',
        age: 43,
        powers: [0]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})()