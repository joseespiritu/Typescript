export const TiposBasicos = () => {

    const nombre: string = 'Jose';
    const edad: number = 24;
    const estaActivo: boolean = true; // Los boolean no tienen representacion en html

    const poderes:string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return(
        <>
            <h3>Tipos básicos</h3>
            { nombre }, { edad }. { (estaActivo) ? 'activo' : 'no activo' }
            <hr/>
            { poderes.join(', ') }
        </>
    );
}