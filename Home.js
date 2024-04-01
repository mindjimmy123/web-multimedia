import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import service1Image from './service1.png';
import service2Image from './service2.png';
import service3Image from './service3.png';
import pet1 from './dog.jpg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PetsIcon from '@mui/icons-material/Pets';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function Home() {
  return (
    <div>
      <h1 className="main-heading">Every Pet Deserves a Loving Home</h1>
      <h2 className="sub-heading">Adopt a Pet Today</h2>
      <div className="container">
        <div className="search-container">
          <div className="category-dropdown">
          {/* <PetsIcon/> */}
            <select className="category-select">
              <option value="pets">Pets</option>
              <option value="dogs">Dogs</option>
              <option value="cats">Cats</option>
            </select>
          </div>
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-3" style={{ maxHeight: "300px" }}>
            <div className="counterImg">
              <span class="metric-number">200+</span>
              <h5 class="metric-caption">Home for Dogs & Cats</h5>
            </div>
          </div>

          <div className="col-sm-12 col-lg-3" style={{ maxHeight: "300px" }}>
            <div className="counterImg">
              <span class="metric-number">100+</span>
              <h5 class="metric-caption">Wild Animals Saved</h5>
            </div>
          </div>

          <div className="col-sm-12 col-lg-3" style={{ maxHeight: "300px" }}>
            <div className="counterImg">
              <span class="metric-number">150+</span>
              <h5 class="metric-caption">Pets Wainting for Home</h5>
            </div>
          </div>
        </div>

        <h1 className="featured-heading">Our Values</h1>
        <div className="product-container">
          <div className="product-item">
            <img
              src={service1Image}
              alt="Product 1"
              className="product-image"
            />
            <p className="value-title">Compassion</p>
            <p className="value-caption">Demonstrating empathy and care towards animals and people involved in the adoption process.</p>
          </div>
          <div className="product-item">
            <img
              src={service2Image}
              alt="Product 2"
              className="product-image"
            />
            <p className="value-title">Animal Welfare</p>
            <p className="value-caption">Ensuring the well-being and safety of animals is paramount.</p>
          </div>
          <div className="product-item">
            <img
              src={service3Image}
              alt="Product 3"
              className="product-image"
              style={{ width: "150px" }}
            />
            <p className="value-title">Community</p>
            <p className="value-caption">Engaging with the community to promote adoption, responsible pet ownership, and animal welfare initiatives.</p>
          </div>
        </div>

        <h1 className="featured-heading">Our Pets</h1>
        <div className="carousel-container">
          <div style={{ marginRight: '20px', width:'200px' }}>
          <MDBCard class="pet-card">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={pet1}
                fluid
                alt=""
                style={{ borderRadius: '10px' }}
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody class="pet-card-body">
            <MDBCardTitle class="pet-card-title">Pet name</MDBCardTitle>
              <MDBBtn href="#" className="pet-card-adopt-btn">Adopt</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </div>
          <div style={{ marginRight: '20px', width:'200px' }}>
          <MDBCard class="pet-card">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={pet1}
                fluid
                alt=""
                style={{ borderRadius: '10px' }}
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody class="pet-card-body">
            <MDBCardTitle class="pet-card-title">Pet name</MDBCardTitle>
              <MDBBtn href="#" className="pet-card-adopt-btn">Adopt</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </div>
          <div style={{ marginRight: '20px', width:'200px' }}>
          <MDBCard class="pet-card">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={pet1}
                fluid
                alt=""
                style={{ borderRadius: '10px' }}
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody class="pet-card-body">
            <MDBCardTitle class="pet-card-title">Pet name</MDBCardTitle>
              <MDBBtn href="#" className="pet-card-adopt-btn">Adopt</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </div>
          <div style={{  width:'200px' }}>
          <MDBCard class="pet-card">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={pet1}
                fluid
                alt=""
                style={{ borderRadius: '10px' }}
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody class="pet-card-body">
            <MDBCardTitle class="pet-card-title">Pet name</MDBCardTitle>
              <MDBBtn href="#" className="pet-card-adopt-btn">Adopt</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </div>
        </div>

        <div className="adopt-banner">
        <PetsIcon style={{ fontSize: 40, color:'#ABE44E'}} />
          <div className="counterImg">
            <h5 className="adopt-banner-text">Save a Soul, Adopt a Pet Now</h5>
          </div>
          <a class="footer-item" href="/Adopt">
            <button className="adopt-banner-button">Adopt</button>
          </a>
        </div>

        </div>

      {/* <footer class="footer">
        <div class="container-footer">
          <div class="row-footer">
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      <footer class="footer">
        <div class="container-footer">
          <div class="row-footer" style={{ paddingTop: '30px'}}>
            <div class="col-sm-1">
                <a class="footer-item" href="/About">
                <span href="#" class="page-name">About</span>
                </a>
            </div>
            <div class="col-sm-1">
                <a class="footer-item" href="/Contact">
                <span class="page-name">Contact</span>
                </a>
            </div>
            <div class="col-sm-1">
                <a class="footer-item" href="/Adopt">
                <span class="page-name">Adopt</span>
                </a>
            </div>
            <div class="col-sm-1">
                <a class="footer-item" href="/Blog">
                <span class="page-name">Blog</span>
                </a>
            </div>
          </div>

          <div class="row-footer" style={{ paddingTop: '30px'}}>
            <div class="social-links" >
              <a href="#">
              <MailOutlineIcon style={{ color: '#ABE44E', fontSize: '20px'}}/>
              </a>
              <a href="#">
              <PhoneIcon style={{ color: '#ABE44E', fontSize: '20px'}}/>
              </a>
              <a href="#">
              <InstagramIcon style={{ color: '#ABE44E', fontSize: '20px'}}/>
              </a>
              <a href="#">
              <FacebookIcon style={{ color: '#ABE44E', fontSize: '20px'}}/>
              </a>
            </div>
          </div>

          <div class="row-footer" style={{ paddingTop: '30px'}}>
            <h1 class="copyright">Design with love © pet_society 2024. All right reserved</h1>
          </div>

        </div>
      </footer>
      
    </div>
  );
}

export default Home;
