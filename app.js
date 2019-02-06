(function(){class SideNavBar extends HTMLElement
{
    
    constructor(){

        super();
         this.flag=0;
        let temp = document.createElement("template");
       let htmlContent=
`<style>
    
#navbarbtn{
        cursor:pointer;
        float :left;
        display :block;
        margin-left:0px;
        padding :5px;
        height : 25px;
        top:0;
        position: relative;
    transition : 0.5s;
      }
      #navbarbtn div {
        width: 25px;
        height: 3px;
        background-color: black;
        margin: 6px 0;
        transition : 0.8s;
       }
      
      #navbarbtn:hover  div
      {
        box-shadow:  2px 2px 2px #888888;
         background-color:gray;
      }
      
      .navbar
      {
          display: block;
        top :0;
        left:0;
        width: 0px;
        position :fixed;
        background-color: #f1f1f1;
        position: fixed;
        overflow-x:hidden;
        height: 100%;
        transition : width 0.5s;
      }
      .navbar a
      {  
        padding : 16px;
        display:block;
        text-decoration:none;
        color:black;
        transition : 0.7s;
      }
     .navbar a.active
      {
       background:#4CAF50;
        color :white;
      } 
      .navbar a:hover:not(.active)
      {
        color : white;
          background : black;
      }
      @media screen and (max-width: 700px) {
  .navbar {
    width: 100%;
    height: auto;
    position: relative;a
  }
  #navbarbtn {display: none;}
  .navbar a {float: left;}
 #main {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .navbar a {
    text-align: center;
    float: none;
  }
  #navbarbtn {display: none;}
}
      </style>` +

      `   <div class="navbar" id="navbar" >
       
        </div>
        <div id="main">
       <div id="navbarbtn" type="button" > 
        <div></div>
        <div></div>
        <div></div>
     </div> `;
        
        temp.innerHTML = htmlContent ;

        this.navBarTrigger = this.navBarTrigger.bind(this);
        

   
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(temp.content.cloneNode(true));

        this.navBarBtn = this.shadowRoot.querySelector("#navbarbtn");  
        this.navBar = this.shadowRoot.querySelector("#navbar"); 
  
    this.linkData=JSON.parse(this.links);
    
 
        for(let i=0;i<this.linkData.length;i++)
             this.navBar.innerHTML+=`<a href="${this.linkData[i].url}" id="anchorTag"+${this.i} >${this.linkData[i].name}</a> `;
             this.navBarBtn.addEventListener("click",this.navBarTrigger);
            
        }

    attributeChangedCallBack(){
        this.navBarBtn.addEventListener("click",this.navBarTrigger);
    }
    disconnectedCallBack(){
        this.navBarBtn.removeEventListener("click",this.navBarTrigger);
    }
    
    navBarTrigger()
    {
    if(this.flag==0)
    {
   this.navBar.style.width = 200+"px";
  this.flag=1;
  document.querySelector("body").style.marginLeft=200+"px";
    }
    else
    {
        this.navBar.style.width = 0+"px";
        document.querySelector("body").style.marginLeft=0+"px";
        this.flag=0;   
    }
   
    }
  
    get links()
    {
        return this.getAttribute("links");
    }
    set links(newVal)
    {
        this.setAttribute("links",newVal);
    }
}
window.customElements.define("side-nav-bar",SideNavBar);
}());
