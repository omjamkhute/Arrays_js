const stu = ["kabir","john","tyrion"];
console.log(stu);

stu[0] = "daneras";

console.log(stu[0]);
console.log(stu);

// we cannot assign new array we just add or edit existing arrays
// stu = ["sansa","Arya"]; this op not allow


// op in arrays
// val add in end
stu.push("hound","grey",1,2,{name:"sallu"});
console.log(stu);
console.log(stu.indexOf(2));

stu.pop();
stu.reverse();
console.log(stu);