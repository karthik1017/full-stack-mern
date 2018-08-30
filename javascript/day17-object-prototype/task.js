function task(title, isCompleted)
{
    this.title = title;
    this.createdAt = new Date();
    this.isCompleted = isCompleted;
    this.details = function()
    {
        return `${this.createdAt} ${this.title} , ${this.isCompleted}`;
    }
    this.markAsComplete = function()
    {
        this.isCompleted = true;
        return `the task has been marked as complete`;
    }
    this.markAsIncomplete = function()
    {
        this.isCompleted = false;
        return `the task has been marked incomplete`;
    }
}
var t1 = new task('go for a walk',false);
console.log(t1.details());
console.log(t1.markAsComplete());
console.log(t1.markAsIncomplete());

var tasks = [];
var t2 = new task('recharge metro card',true);
var t3 = new task('use zomato coupon',false);
var t4 = new task('have breakfast',true);

tasks.push(t2,t3,t4);

var incompleteTask = tasks.filter(ele => ele.isCompleted === false);
var completedTask = tasks.filter(ele => ele.isCompleted === true);
//console.log(incompleteTask);
//console.log(completedTask);
console.log('\n incompleted Tasks');
incompleteTask.forEach(ele => console.log(ele.details()));
console.log('\n completed Tasks');
completedTask.forEach(ele => console.log(ele.details()));   
