function sortByProperty(arr ,prop)
{
return arr.sort((a,b)=>a[prop]>b[prop]?1:-1);
}

const people=[{name:'John' ,age :25},{name:'Jane' ,age :20}];
console.log(sortByProperty(people ,'age')); //Output:[{name:'Jane' ,age :20},{name:'John' ,age :25}]
