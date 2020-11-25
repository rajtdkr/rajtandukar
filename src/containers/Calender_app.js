import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

function Calender_app(){

    return(  <div >
<Calendar onPanelChange={onPanelChange} />
</div>
        )
}
export default Calender_app;