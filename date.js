
module.exports=getDate;              //this is same as module.exports

function getDate(){

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  const today = new Date();

  let day = today.toLocaleDateString("en-US", options);
  return day;
}
