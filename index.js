const express = require('express');
const app= express();
var head =[];
var text=[];
const homePage = "Lacus vel facilisis volutpat est velit. Leo urna molestie at elementum eu facilisis sed. Egestas dui id ornare arcu odio ut sem nulla pharetra. A scelerisque purus semper eget duis at tellus. Viverra accumsan in nisl nisi. Lectus arcu bibendum at varius vel pharetra vel. Nibh nisl condimentum id venenatis. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tristique senectus et netus et malesuada fames ac turpis. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Fames ac turpis egestas sed tempus urna et. Mattis aliquam faucibus purus in massa. Accumsan lacus vel facilisis volutpat est velit. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Arcu dui vivamus arcu felis bibendum ut tristique et. Ultrices vitae auctor eu augue. Pretium lectus quam id leo in vitae turpis."
const about = "Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vestibulum sed arcu non odio euismod lacinia at quis risus. In dictum non consectetur a. Aliquet eget sit amet tellus cras. Enim facilisis gravida neque convallis a cras semper auctor neque. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ullamcorper velit sed ullamcorper morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const contact = "Faucibus et molestie ac feugiat sed lectus. Amet tellus cras adipiscing enim eu turpis egestas. Sit amet risus nullam eget felis. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Mauris a diam maecenas sed enim ut sem viverra aliquet. Volutpat sed cras ornare arcu. Urna porttitor rhoncus dolor purus non enim praesent. Faucibus et molestie ac feugiat. "
app.set("view engine","ejs");
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
	res.render("home",{head,text,homePage});
});

app.get("/about",(req,res)=>{
	res.render("about",{about});
})
app.get("/contact",(req,res)=>{
	res.render("contact",{contact});
})
app.post("/add",(req,res)=>{
	const {heading, entry} = req.body;
	head.push(heading);
	text.push(entry);
	
	res.redirect("/")

})
app.get("/posts/:title",(req,res)=>{
	
	for(let i=0;i<head.length;i++){
		console.log(req.params.title);
		if(req.params.title==head[i]){
			console.log("found");
			res.render("page",{h:head[i],t: text[i]});
			break;
		}
	}
})
app.get("/add",(req,res)=>{
	res.render("createPost");
})
app.listen(3000, ()=>{
	console.log("running on Port 3000");
})