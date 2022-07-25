
(() => {

    //aplicando el princiipio de responsabilidad unica 
    //priorisar la composicion frente a la herencia 

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
       

    }


    class User {
        public lastAcess: Date;
        public email: string;
        public role: string;

        constructor({ email,role} : UserProps){
            this.email = email;
            this.role = role;
            this.lastAcess =  new Date();
            }

            checkCredentiasl(){
                return true;
            }


    }

    interface SettingsProps{
        workingDirectory:         string;
        lastOpenFolder:           string;
       
    }
    class Settings {

        public workingDirectory;
        public lastOpenFolder;

        constructor({
            workingDirectory,
            lastOpenFolder  ,
                    
        }: SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings{

        public person       : Person;
        public user         : User;
        public settings     : Settings;

        constructor(
            {
                name,gender,birthdate,
                email,role,
                lastOpenFolder,workingDirectory
            } :UserSettingsProps
        ){

            this.person = new Person({name,gender,birthdate});
            this.user = new User({email,role});
            this.settings = new Settings({workingDirectory,lastOpenFolder})

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
    console.log({userSettings,areCredentiaslValid: userSettings.user.checkCredentiasl()})


})();