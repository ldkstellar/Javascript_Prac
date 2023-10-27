class Korea{
    constructor(name ,age ,id){
        this.name = name;
        this.age = age;
        this.id = id;
    };

    isman(){
        console.log('바보입니다');
    }
}




class Student extends Korea{
    
    isman(){
        console.log('사람입니다');
    }
    information(){
        console.log(this.name , this.age ,this.id);
    }
}

const ldk = new Student('이동규',26,2020271186);
ldk.information();
ldk.isman();