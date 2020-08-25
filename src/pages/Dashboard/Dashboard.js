import React, { useState, useEffect, useMemo, Component } from "react";
import "./Dashboard.css";


import Slider from "react-slick";
import Experience from "../../components/Experience/Experience";
import Video from "../../components/Video/Video";
import { Container, Modal, Button} from "react-bootstrap";
import Header from "../../components/Header/Header";


const Dashboard = () => {
 
  const [requests1, setRequests1] = useState([]);
 



  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
    
    
  
  .then((data) => setRequests1(data));
  
  
  }, []);

  
  


  
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

console.log(requests1.title)
  return (

    <div className="containerDashboard">

      <Header />

      <Experience />
   



      <div className="contentDashboard">
        <Container>
          <h2 className="ferias">Where to spend holidays</h2>
          <div className="spot-list">
            <Slider {...settings}>



            {requests1.map(spot => (
              
                <div key ={spot.id}>
                  <div className="contentSpots">
                    <div className="Image">
                      <header
                        style={{
                          backgroundImage: `url(https://www.costacruises.eu/content/dam/costa/inventory-assets/ports/RIO/c035_rio_de_janeiro.jpg.image.750.563.low.jpg)`
                        }}
                      />
                    </div>

                    <div className="spots">
                      <strong>{spot.title}</strong>
                      <p>{spot.boady}</p>
                      <span>
                        { `${spot.price} /day`  }
                      </span>
                    </div>
                  </div>
                </div>
               ))}
            </Slider>
          </div>
        </Container>
      </div>

      <Video />

      <Container>
        <h2 className="ferias">Recomended for you</h2>
        <div className="spot-list">
          <Slider {...settings}>
            {requests1.map(spot => (
              <div>
                <div className="contentSpots">
                  <div className="Image">
                    <header
                      style={{
                        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSax071-IC6KQHL9xUOnGr0_HOjhyd26Y_KMg&usqp=CAU)`
                      }}
                    />
                  </div>

                  <div className="spots">
                    <strong>{spot.title}</strong>
                    <p>{spot.boady}</p>
                    <span>
                       `$25/Day` 
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};


export default Dashboard;
