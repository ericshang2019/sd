class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }

  showName(){
    alert(this.name);
  }
  showAge(){
    alert(this.age)
  }
}

class worker extends person {
  constructor(name,age,job) {
    super(name,age);
    this.job=job;
  }

  showjob(){
    alert(this.job);
  }
}

let w=new worker('eric',22,'software');
w.showName();
w.showAge();
w.showjob();
