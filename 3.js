function person(name) {
 
    function greeting() {
        console.log("hello " + name + "!");
    }
 
    function setAge(age) {
        this.age = age;
    }
 
    function getName() {
        return name;
    }
 
    function getAge() {
        return this.age;
    }
 
    return {greeting, setAge, getName, getAge};
}
 
var hemant = new person("Hemant Kumar");
hemant.greeting();
hemant.setAge(26);
console.log(hemant.getName());
console.log(hemant.getAge());
 
