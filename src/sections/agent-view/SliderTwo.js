<<<<<<< HEAD
import Container from '@mui/material/Container';
import SlideToggle from "react-slide-toggle";
// import Grid from '@mui/material/Unstable_Grid2';
import arrow from '../../assets/agent/arrow.png';
const SliderTwo = ({title,subtitle,toggled}) => {
    return (
        <Container className='timeline mb-3'>
        <SlideToggle
        collapsed ={toggled}
           render={({ toggle, setCollapsibleElement }) => (
               <div className="my-collapsible slider">
               <div className="my-collapsible__toggle d-flex justify-between align-center" onClick={toggle}>
                   <div className='d-flex align-center'>
                       <img className='arrow' src={arrow} alt="" />
                       <h2>{title}</h2>
                   </div>
                   <h4>{subtitle}</h4>
               </div>
               <div className="my-collapsible__content" ref={setCollapsibleElement}>
                   <div className="my-collapsible__content-inner">
                   {title}
                   </div>
               </div>
               </div>
           )}
       />
  </Container>
    );
}

export default SliderTwo;
=======
import Container from '@mui/material/Container';
import SlideToggle from "react-slide-toggle";
// import Grid from '@mui/material/Unstable_Grid2';
import arrow from '../../assets/agent/arrow.png';
const SliderTwo = ({title,subtitle,toggled}) => {
    return (
        <Container className='timeline mb-3'>
        <SlideToggle
        collapsed ={toggled}
           render={({ toggle, setCollapsibleElement }) => (
               <div className="my-collapsible slider">
               <div className="my-collapsible__toggle d-flex justify-between align-center" onClick={toggle}>
                   <div className='d-flex align-center'>
                       <img className='arrow' src={arrow} alt="" />
                       <h2>{title}</h2>
                   </div>
                   <h4>{subtitle}</h4>
               </div>
               <div className="my-collapsible__content" ref={setCollapsibleElement}>
                   <div className="my-collapsible__content-inner">
                   {title}
                   </div>
               </div>
               </div>
           )}
       />
  </Container>
    );
}

export default SliderTwo;
>>>>>>> agent-view-book
