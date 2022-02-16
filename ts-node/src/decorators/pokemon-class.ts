// Decorador de clase que retorna el constructor
function printToConsole( constructor: Function) {
    console.log(constructor);
}

// Factory decorator, permite solo valores positivos menores a 800
function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        // console.log({target, propertyKey, descriptor});
        // descriptor.value = () => console.log('Hola mundo');

        const originalMethod = descriptor.value;

        descriptor.value = (id:number) => {
            if(id < 1 || id > 800) {
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            } else {
                return originalMethod(id)
            }
        }
    }
}

const printToConsoleConditional = (print:boolean = false): Function => {
    // return () => console.log('Hola Mundo');
    if(print) {
        return printToConsole;
    } else {
        return () => {};
    }
}

// Decorador para bloquear prototipo
const bloquearPrototipo = function(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function readOnly ( isWritable: boolean = true ): Function {
    return function(taget: any, propertyKey: string) {
        // console.log({taget, propertyKey, descriptor});
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Jose';
            },
            set(this, val) {
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {

    @readOnly(false)
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id:number ) {
        console.log(`Pokemon guardado en BD ${id}`);
    }
}