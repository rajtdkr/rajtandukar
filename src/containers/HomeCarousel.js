import { Carousel} from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Home_Carousel(){

            return(
          <Carousel effect="fade">
            <div>
              <h3 style={contentStyle}>User You
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>User two
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>

        )

}
export default Home_Carousel;
