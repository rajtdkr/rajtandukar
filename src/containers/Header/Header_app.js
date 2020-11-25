import {Avatar, Badge} from "antd";
import Title from "antd/lib/typography/Title";
import {
  Link
} from "react-router-dom";


function Header_app(){

    return(  <div >
            <span className="avatar-item" style = {{float : 'right'}}>
      <Badge count={1}>

            <Link to="/dashboard" > <Avatar  size = "large" src = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></Link>
  </Badge>
    </span>
<Title style={{color : 'white'}} level = {3}>
    Laconik
</Title>
</div>
        )

}
export default Header_app;