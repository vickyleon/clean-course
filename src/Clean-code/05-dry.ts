
type Size = ''|'S'|'M'|'L';
class Product{

    constructor(
        public name:string = '',
        public price:number = 0,
        public size: Size = '',
    ) {
        
    }

    idProductReady():boolean{
        for(const key in this){
            //typeof this[key]
            //console.log(key, typeof this[key]);

            switch(typeof this[key]){
                case 'string': 
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is empty`);
                break;
                default:
                    throw Error(`${typeof this[key]} is no valid`);
            }
        }
        return true;
    }

    toString(){
        //no Dry
        // if(this.name.length <= 0) throw Error('name is empty');
        // if(this.price <= 0) throw Error('prize is empty');
        // if(this.size.length <= 0) throw Error('size is empty');
        if(!this.idProductReady) return;
        

        return `${this.name} (${this.price}), ${this.size}`
    }

}

(() => {

    const bluePants = new Product('Blue pants',10,'M');
    console.log(bluePants.toString());



})();