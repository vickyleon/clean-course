
(() => {

    //no aplicando el princiipio de responsabilidad unica 


    type Gender = 'M'|'F';

    class Person{

        constructor( 
             public name: string,
             public gender: Gender,
             public birthdate: Date ){
             
            }
    }

    

    const newPerson =  new Person('Fernando', 'M',new Date('1985'));
    console.log({newPerson});

    class User extends Person{
        public lastAcess: Date;

        constructor(
            public email: string,
            public role: string,
            public lastAcess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
            ){
                super(name,gender,birthdate);
                this.lastAcess =  new Date();
            }

            checkCredentiasl(){


                return true;
            }


    }

    class UserSettings extends User{

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email                   : string,
            role                    : string,
            lastAcess                   : Date,
            name                    : string,
            gender                  : Gender,
            birthdate                   : Date
        ){
            super(email,role,lastAcess,name, gender,birthdate);
        }

    }

    const userSettings = new UserSettings(
        '/user',
        'home',
        'fer@name',
        'Admin',
        new Date('1985-10-21'),
        'Fernandp',
        'M',
        new Date('1999-12-12')

    );
    console.log({userSettings,areCredentiaslValid: userSettings.checkCredentiasl()})


})();