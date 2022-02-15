(() => {
    type Avengers =  {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: ' Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.133131
    };

    // const { poder, vision } = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({vision, ...resto}: Avengers) => {
        console.log(vision);
        console.log(resto);
    }

    // printAvenger(avengers);


    const avengersArr: [string, boolean, boolean] = ['Cap. Ámerica', true, false];

    const [ capitan,ironman, seriaUnNumero] = avengersArr;

    // console.log({ironman, capitan});

})()