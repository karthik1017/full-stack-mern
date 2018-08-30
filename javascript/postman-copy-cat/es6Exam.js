class Dictionary{
    newEntry(str1,str2){
      this.obj = {};
      this.obj['word'] = str1;
      this.obj['desc'] = str2;
    }
    look(str3){
        if(this.obj.word === str3)
        {
          return this.obj.desc;
        }
        else{
          return `cannot find ${str3}`;
        }
    }
}
let d = new Dictionary();
d.newEntry('apple','apple is a fruit');;
console.log(d.look('apple'));
console.log(d.look('banana'));
