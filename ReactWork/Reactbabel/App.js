const parent = document.getElementById('parent');
// console.log(parent);
const root = ReactDOM.createRoot(parent);

// const li3 = React.createElement('li',{},"React");   ========BASIC STRUCTURE TO CRETAE AN ELEMENT=======


// const h2 = React.createElement("h2",{style:{textAlign:'center',color:'brown',backgroundColor:'pink',fontFamily:'cursive',fontSize:'40px'}},"Welcome to React App");
// const li1 = React.createElement('li',{},"Java");
// const li2 = React.createElement('li',{},"Python");
// const li3 = React.createElement('li',{},"React");
// const ul = React.createElement("ul",{style:{textAlign:'center',listStyleType:'none',color:'blue',backgroundColor:'skyblue'}},li1,li2,li3);

// const pic = React.createElement('img',{src:'https://www.twincities.com/wp-content/uploads/2018/02/wallpapersdencom_peter-rabbit-2018-movie-poster_2560x1600.jpg?w=1800&resize=1800,1800',style:{border:'2px solid orange',width:'200px',height:'200px',borderRadius:'50px',marginRight:'10px'}});
 
// const myname = React.createElement('h3',{style:{fontFamily:'sans-serif',fontSize:'30px',color:'skyblue',marginTop:'150px'}},"Peter");
// const wrapper1 = React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'1rem'}},pic,myname);
// const wrapper = React.createElement('div',{},h2,wrapper1,ul);



//jsx
const h2 =<h2>Hello using JSX</h2>;
const li1 = <li>React</li>;
const li2 = <li>Java</li>;
const ul=<ul>{li1}{li2}</ul>
const container = (
    <>
    {h2}
    {ul}
    </>
)
root.render(container);