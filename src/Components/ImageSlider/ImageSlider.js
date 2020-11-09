import React from 'react';
import ImageSlider from 'ac-react-simple-image-slider';
import Carousel from 'react-elastic-carousel';

// const Image = () =>{
//     return (
//         <>
//             <Carousel>
//                 <div  > 
//                 <img style = {{width : "100%"}} src = "https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=751&q=80" />
//                 </div> 
//                 <img src = "https://images.unsplash.com/photo-1516888693095-f0e05366ddc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
//                 <img src = "https://images.unsplash.com/photo-1516888693095-f0e05366ddc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
//                 <img src = "https://images.unsplash.com/photo-1516888693095-f0e05366ddc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
//             </Carousel>
//         </>
//     );
// }

const imageData = [
  {
    src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '1'
  },
  {
    src: 'https://images.unsplash.com/photo-1562932838-7a5b5d09f47a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: '2'
  }
];

    const Image = () => (
    <ImageSlider height='600px' width='95%' data={imageData} duration = {6} />
    );

export default Image;