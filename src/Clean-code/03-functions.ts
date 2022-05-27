(() => {

    // función para obtener información de una película por Id
    function getMovie( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getActorsByMovie( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    function setMovie(
        title: string,
        description: string, 
        rating: number,
        cast: string[] ) {
        console.log({ title, description, rating, cast });
    }
    interface Movie{
        cast:           string[],
        description:    string, 
        rating:         number,
        title:          string
    }

    function createMovie( {title, description, rating, cast } : Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    //continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        let result:number;

        if ( isDead ) {
            return result = 1500;
        } 
        
        if ( isSeparated ) {
           return result = 2500;
        } 


        return isRetired ? 3000 : 4000;
        
    }

    


})();




