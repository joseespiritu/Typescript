(() => {



    interface Client {
        name: string;
        age?: number;
        address?: Address
        getFullAddress?(id:string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client:Client = {
        name: 'Jose',
        age: 25,
        address: {
            id: 125,
            zip: 'JY2S',
            city: 'Ottawa'
        },
        // getFullAddress(id: string) {
        //     return this.address.city; 
        // }
    }

    const client2:Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 21,
            zip: 'MKLJVJKNF',
            city: 'City'
        },
        // getFullAddress() {
        //     return 'Hola';
        // }
    }

})()