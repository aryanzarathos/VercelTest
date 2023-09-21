export const UppercaseFirstLetter = (string)=>{
  let str = string.split(" ")
  if(str.length>1){
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  const str2 = str.join(" ");
  return str2
  }else{
    return string.charAt(0).toUpperCase()+ string.slice(1)
  }
}