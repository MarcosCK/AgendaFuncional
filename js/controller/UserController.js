class UserController{
    constructor(){
        this.addEventBtns();
        this.start();
    }

    

    start(){
      let user = new User('Marcos Churkin','raidenchur@gmail.com','41984940849','Jantar no Azuki','2022-12-08T14:13')
      this.addLine(user)
    }

    addLine(user){
        let tr = document.createElement('tr');
        tr.dataset.user = JSON.stringify(user)
        tr.innerHTML = `
        <td class='table-name'>${user.getName()}</td>
        <td class='table-email'>${user.getEmail()}</td>
        <td class='table-phone'>${user.getPhone()}</td>
        <td class='table-desc'>${user.getDesc()}</td>
        <td class='table-data'>${user.getData()}`;
        
        tr.innerHTML+=`
        <td class='table-actions'>
            <span class="material-icons-sharp edit-btn">edit</span>
            <span class="material-icons-sharp delete-btn">delete</span>
        </td>`;
       document.querySelector('.users tbody').appendChild(tr);
       
       document.querySelectorAll('.edit-btn')[document.querySelectorAll('.edit-btn').length-1].addEventListener('click',()=>{
        document.querySelector('.form-edit').style.display = 'flex';

        let userObj = JSON.parse(tr.dataset.user);
        let user = new User(userObj._name,userObj._email,userObj._phone,userObj._desc, userObj._data);
        let formEl = document.querySelector('form.edit');
        let elements = formEl.elements;
        elements.name.value = user.getName();
        elements.email.value = user.getEmail();
        elements.phone.value = user.getPhone();
        elements.desc.value = user.getDesc();
        elements.data.value = user.getData();
       })

       
       document.querySelectorAll('.delete-btn')[document.querySelectorAll('.delete-btn').length-1].addEventListener('click',()=>{
        if(confirm('Deseja deletar o usuário?')){
            let userObj = JSON.parse(tr.dataset.user);
            let user = new User(userObj._name,userObj._email,userObj._phone,userObj._desc, userObj._data);
            localStorage.setItem('users',JSON.stringify(this.users))
            tr.replaceWith('');
        }
    })
       
}


    register(){
        let formEl = document.querySelector('.register');
        let elements = formEl.elements;
        let user;   
      
        user = new User(elements.name.value,elements.email.value,
        elements.phone.value,elements.desc.value,elements.data.value)
        
         this.addLine(user)
    }


    

    closeForm(form, formContainer){
        form.reset();
        formContainer.style.display = none
    }

    edit(){
        let formEl = document.querySelector('form.edit');
        let elements = formEl.elements;

    
        let userObj = JSON.parse;
        userObj._name = elements.name.value
        userObj._email = elements.email.value
        userObj._phone = elements.phone.value
        userObj._desc = elements.desc.value
        userObj._data = elements.data.value
        let user = new User(userObj._name,userObj._email,userObj._phone,userObj._desc,userObj._data);
        


    }

 



    //Pegando o css como reeferencia e usando para implementação//
    addEventBtns(){
        document.querySelector('.add').addEventListener('click',()=>{
            document.querySelector('.form').style.display = 'flex'
        });


        document.querySelectorAll('.check')[0].addEventListener('click',()=>{
            this.register();
        });


        document.querySelectorAll('.close')[0].addEventListener('click',()=>{
            document.querySelector('.form-add').style.display = 'none'
        });

       
        document.querySelectorAll('.close')[1].addEventListener('click',()=>{
             document.querySelector('.form-edit').style.display = 'none'
        });

        document.querySelectorAll('.check')[1].addEventListener('click',()=>{
            this.edit();
        })

        
        
    }

}


