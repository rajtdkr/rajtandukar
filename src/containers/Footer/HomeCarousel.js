import { Carousel} from 'antd';
import { Button, notification } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Home_Carousel(){


    const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'Notifications working!.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
             return(
          <Carousel autoplay effect="fade">
            <div>
              <h3 style={contentStyle}>User You
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>User two
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
              <Button type="primary" onClick={openNotification}>
         Show Notification
        </Button>

              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>

        )

}
export default Home_Carousel;
