import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function Calender_app(){

    return(  <div classname = "calender_css" style={{  width: '300px'
  }}><Calendar  fullscreen={false} onPanelChange={onPanelChange} /></div>
        )
}
export default Calender_app;

