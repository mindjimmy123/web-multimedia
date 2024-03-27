import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
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
            <select className="category-select">
              <option value="all">All</option>
              <option value="dogs">Dogs</option>
              <option value="cats">Cats</option>
            </select>
          </div>
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-4" style={{ maxHeight: "300px" }}>
            <div className="counterImg">
              <span>500+</span>
              <h5>Home for dogs & cats</h5>
            </div>
          </div>

          <div className="col-sm-12 col-lg-3" style={{ maxHeight: "300px" }}>
            <div className="counterImg">
              <span>100+</span>
              <h5>Wild Animals </h5>
            </div>
          </div>

          <div className="col-sm-12 col-lg-3" style={{ maxHeight: "300px" }}>
            <div className="counterImg">
              <span>300+</span>
              <h5>Number of Pets Wainting for Home</h5>
            </div>
          </div>
        </div>

        <h1 className="featured-heading">Our Values</h1>
        <div className="product-container">
          <div className="product-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 1"
              className="product-image"
            />
            <p>Description 1</p>
          </div>
          <div className="product-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 2"
              className="product-image"
            />
            <p>Description 2</p>
          </div>
          <div className="product-item">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 3"
              className="product-image"
            />
            <p>Description 3</p>
          </div>
        </div>
        <div className="carousel-container">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <footer class="footer">
        <div class="container-footer">
          <div class="row-footer">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
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
      </footer>
    </div>
  );
}

export default Home;
