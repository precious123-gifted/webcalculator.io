//constructor(props){
//super(props) ;
//this.state = {
//	currentvalues : ''
//}; this.handleChange = this.handleChange.bind(this);}
//
//handleChange(event) {
//   this.setState((prevState) => {
//    return { currentvalue: prevState.value  }
//   });
//  }

function insert(num) {
  document.getElementById("textviewer").value =
    document.getElementById("textviewer").value + num;
}

function result() {
  let calculation = document.getElementById("textviewer").value;
  if (calculation) {
    document.getElementById("textviewer").value = eval(calculation);
  }
}

function cler(props) {
  document.getElementById("textviewer").value = "";
}

function delet() {
  var id = document.getElementById("textviewer").value;

  document.getElementById("textviewer").value = id.substring(0, id.length - 1);
}

function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
