var obj = {
    name: 'Mike',
    lastname: 'Tyson',
    age: 55,
    union: function() {
        console.log(`${this.name} ${this,this.lastname}`);
    }

}
obj.union();