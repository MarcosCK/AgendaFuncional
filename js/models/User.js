class User{
    constructor(name, email, phone, desc, data){
        this._name = name
        this._email = email
        this._phone = phone
        this._desc = desc
        this._data = data



    }

   isValid(){
    
   }

    getName(){
        return this._name;
    }

    getEmail(){
        return this._email;
    }

    getPhone(){
        return this._phone;
    }

    getDesc(){
        return this._desc;
    }

    getData(){
        return this._data;
    }
      

      
}
