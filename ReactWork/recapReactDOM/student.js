const parent = document.getElementById('parent');
console.log(parent);

const root = ReactDOM.createRoot(parent);
// const li3 = React.createElement('li',{},"React");
// root.render(li3);
const pic = React.createElement('img',{src:'https://www.twincities.com/wp-content/uploads/2018/02/wallpapersdencom_peter-rabbit-2018-movie-poster_2560x1600.jpg?w=1800&resize=1800,1800',style:{padding:'20px',width:'200px',height:'200px',marginRight:'10px'}});
const li1 = React.createElement('li',{},"Name");
const li2 = React.createElement('li',{},"Branch");
const li3 = React.createElement('li',{},"Section");
const li4 = React.createElement('li',{},"College");

const ul = React.createElement("ul",{style:{textAlign:'center',listStyleType:'none',color:'black',fontFamily:'sans-serif',paddingLeft:'10%'}},li1,li2,li3,li4);
const wrapper1 = React.createElement('div',{style:{width:'300px',display:'flex flex:column',border:'2px solid black'}},pic,ul);
root.render(wrapper1);