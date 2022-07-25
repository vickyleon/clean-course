
(() => {

    //no aplicando el princiipio de responsabilidad unica 


    type Gender = 'M'|'F';


    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person{

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor( {name, gender,birthdate} : PersonProps ){
                this.name           = name;
                this.gender         = gender;
                this.birthdate      = birthdate; 
            }
    }

    interface UserProps{

        email:              string;
        role:               string;
        lastAcess:          Date;
        name:               string;
        gender:             Gender;
        birthdate:          Date;
       

    }


    class User extends Person{
        public lastAcess: Date;
        public email: string;
        public role: string;

        constructor({ email,role,name, gender,birthdate} : UserProps){
            super({name,gender,birthdate});
            this.email = email;
            this.role = role;
            this.lastAcess =  new Date();
            }

            checkCredentiasl(){


                return true;
            }


    }

    interface UserSettingsProps{
        workingDirectory:         string;
        lastOpenFolder:           string;
        email                   : string;
        role                    : string;
        lastAcess               : Date;
        name                    : string;
        gender                  : Gender;
        birthdate               : Date;
    }
    class UserSettings extends User{

        public workingDirectory;
        public lastOpenFolder;

        constructor({
            workingDirectory,
            lastOpenFolder  ,
            email           ,
            role            ,
            lastAcess       ,
            name            ,
            gender          ,
            birthdate           
        }: UserSettingsProps){
            super({email,role,lastAcess,name, gender,birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }

    }

    const userSettings = new UserSettings({
        workingDirectory : '/user',
        lastOpenFolder :    'home',
        email: 'fer@name',
        role: 'Admin',
        lastAcess: new Date('1985-10-21'),
        name: 'Fernandp',
        gender: 'M',
        birthdate: new Date('1999-12-12')
    }
    );
    console.log({userSettings,areCredentiaslValid: userSettings.checkCredentiasl()})


})();