import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
import SlideToggle from "react-slide-toggle";
import arrow from '../../assets/agent/arrow.png';
import TimelineData from './Timeline';

const SlideToggleMain = ({dayTitle,subTitle ,toggled}) => {
    return (
       <Container className='timeline mb-3'>
             <SlideToggle
             duration={480 /* default 300 */}
             collapsed ={toggled}
                render={({ toggle, setCollapsibleElement }) => (
                    <div className="my-collapsible slider">
                    <div className="my-collapsible__toggle d-flex justify-between align-center" onClick={toggle}>
                        <div className='d-flex align-center'>
                            <img className='arrow' src={arrow} alt="" />
                            <h2>{dayTitle}</h2>
                        </div>
                        <h4>{subTitle}</h4>
                    </div>
                    <div className="my-collapsible__content" ref={setCollapsibleElement}>
                        <div className="my-collapsible__content-inner">
                        <TimelineData/>
                        </div>
                    </div>
                    </div>
                )}
            />
       </Container>
    );
}

export default SlideToggleMain;
