
var clear;
var insert;
var front;
var clear;
var end;
var prev;
var next;
var length;
var currPos;
var moveTo;
var getElement;
var moveTo;
function List() {
 this.listSize = 0;
 this.pos = 0;
 this.dataStore = [ ];
 this.clear = clear;
 this.find = find;
 this.toString = toString;
 this.insert = insert;
 this.append = append;
 this.remove = remove;
 this.front = front;
 this.end = end;
 this.prev = prev;
 this.next = next;
 this.length = length;
 this.currPos = currPos;
 this.moveTo = moveTo;
 this.getElement = getElement;
 // this.length = length;
};
function append(element) {
  this.dataStore [this.listSize++]= element;
 };
  function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
    return 1;
    }
    }
    return -1;
    }
    
 function remove(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    var nameTR= this.find (element);
  if ( nameTR > -1) {
  this.dataStore.splice(nameTR, 1);
  --this.listSize;
  return true;
  }
  return false;
  }
    }
 function toString() {
  return this.dataStore;
 }
 function length() {
  return this.listSize;
 }

 var names = new List();
 names.append("Cynthia");
 names.append("Raymond");
 names.append("Barbara");
 console.log(names.toString());
 names.remove("Raymond");
 console.log(names.toString());
 console.log(" Found: " + names.find("Bar"));
 console.log(" length = " + names.length())


