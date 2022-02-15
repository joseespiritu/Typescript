(() => {
    class Avenger { 
        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Constructor avenger llamado!');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
            // console.log('Contructor xmen llamado!');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName( name: string ) {
            if(name.length < 3) {
                throw new Error('El nombre debe de ser mayor a 3 letras');
            }
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName())
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // wolverine.getFullNameDesdeXmen();
    // wolverine.fullName = 'Nm';
    // console.log(wolverine.fullName);

})()