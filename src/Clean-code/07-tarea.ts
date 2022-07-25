(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor( 
            public value: string,
            public placeholder: string,
           
        ) {
        }
    }

    class InputEvents  {
        constructor( ) {

        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputProps{
        id              : string;
        type            : HtmlType;
        value           : string;
        placeholder     : string;
    }

    class InputElement{


        public html                 : HtmlElement;
        public inputAtributes       : InputAttributes;
        public inputEvents          : InputEvents;

        constructor(
            {
                id, type,
                value, placeholder
            } : InputProps

            
        ){
            this.html = new HtmlElement(id,type);
            this.inputAtributes = new InputAttributes(value,placeholder);
            this.inputEvents = new InputEvents();
        }

    }
    //? Idea para la nueva clase InputElement

    const nameField = new InputElement(
        {
            type:           'input',
            value:          'Fernando', 
            placeholder:    'Enter first name', 
            id:             'txtName'
        }
        );

    console.log({ nameField });

})()