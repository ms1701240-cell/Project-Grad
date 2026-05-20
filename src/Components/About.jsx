import React, { useState, useEffect } from 'react';
import imgwrap from '../img/Image Wrapper.png';
import img1 from '../img/Image.png';
import img2 from '../img/Image2.png';
import img3 from '../img/Image3.png';
import img4 from '../img/Image4.png';
import img5 from '../img/Image5.png';
import img6 from '../img/Image6.png';
import img7 from '../img/Image7.png';
import img8 from '../img/Image8.png';
import rimg from '../img/Recipe Image.png';
import rimg2 from '../img/Recipe Image2.png';


export default function About({ setCurrentPage, setSelectedRecipeId }) {
  const [aboutHeader, setAboutHeader] = useState(null);
  const [authorProfile, setAuthorProfile] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setAboutHeader({
          title: "WELCOME TO MY CULINARY HAVEN!",
          shortWelcome: "Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste."
        });

        if (!authorProfile) {
          setAuthorProfile({
            name: "Isabella Russo",
            title: "FROM ITALIAN ROOTS TO GLOBAL PALATES",
            storyPart1: "Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.",
            storyPart2: "Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.",
            storyPart3: "Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.",
            avatar: imgwrap
          });
        }

        setGalleryImages([img1, img2, img3, img4, img5, img6, img7, img8]);

        setFeaturedRecipes([
          {
            id: 1, 
            title: "Savory Herb-Infused Chicken",
            description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
            meta: "40 MIN - EASY PREP - 3 SERVES",
            image: rimg2,
            isVegan: false
          },
          {
            id: 2,
            title: "Decadent Chocolate Mousse",
            description: "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!",
            meta: "30 MIN - MEDIUM PREP - 4 SERVES",
            image: rimg,
            isVegan: true
          }
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchAllData();
  }, [authorProfile]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#F7F4ED' }}>
        <div className="spinner-border text-warning" role="status"></div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F7F4ED', color: '#2B2B2B', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {aboutHeader && (
        <section className="container pt-5 pb-4">
          <div className="row align-items-start g-4">
            <div className="col-lg-6">
              <h1 className="display-4 fw-black m-0" style={{ fontFamily: 'sans-serif', letterSpacing: '-1px', lineHeight: '1.1', fontWeight: '900' }}>
                {aboutHeader.title}
              </h1>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-start gap-3">
              <p className="text-muted small lh-lg m-0" style={{ maxWidth: '520px' }}>
                {aboutHeader.shortWelcome}
              </p>
             
              <button 
                className="btn text-white px-4 py-2 fw-bold" 
                style={{ backgroundColor: '#E9963F', borderRadius: '20px', fontSize: '12px', letterSpacing: '0.5px' }}
                onClick={() => { setCurrentPage('recipes'); window.scrollTo(0, 0); }}
              >
                EXPLORE RECIPES
              </button>
            </div>
          </div>
        </section>
      )}

      {authorProfile && (
        <section className="container mb-4">
          <div className="bg-white p-4 border" style={{ borderRadius: '35px', borderColor: '#E5DFD5' }}>
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-5">
                <img src={authorProfile.avatar} alt={authorProfile.name} className="img-fluid w-100 h-100" style={{ borderRadius: '25px', objectFit: 'cover', minHeight: '400px' }} />
              </div>
              <div className="col-lg-7 d-flex flex-column justify-content-between ps-lg-4">
                <div>
                  <h2 className="fw-bold mb-3" style={{ letterSpacing: '-0.5px', fontWeight: '800' }}>{authorProfile.title}</h2>
                  <p className="text-muted small lh-lg mb-3" style={{ textAlign: 'justify' }}>{authorProfile.storyPart1}</p>
                  <p className="text-muted small lh-lg mb-3" style={{ textAlign: 'justify' }}>{authorProfile.storyPart2}</p>
                  <p className="text-muted small lh-lg mb-4" style={{ textAlign: 'justify' }}>{authorProfile.storyPart3}</p>
                </div>
                <div className="mb-2">
                  <span className="text-muted d-block small mb-1" style={{ fontSize: '11px' }}>Warmest regards,</span>
                  <span className="fs-2" style={{ fontFamily: 'cursive', color: '#333', fontStyle: 'italic' }}>{authorProfile.name}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                  <span className="text-muted fw-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>FOLLOW ME</span>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-dark small"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-dark small"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-dark small"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container mb-5">
        <div className="row g-3">
          {galleryImages.map((imgUrl, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3">
              <img src={imgUrl} alt={`Gallery ${index + 1}`} className="img-fluid w-100" style={{ borderRadius: '25px', height: '180px', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

     
      <section className="container mb-5">
        <div className="bg-white p-4 border" style={{ borderRadius: '35px', borderColor: '#E5DFD5' }}>
          <div className="d-flex justify-content-between align-items-center mb-4 px-2">
            <h3 className="fw-bold m-0" style={{ letterSpacing: '-0.5px', fontWeight: '800' }}>FEATURED RECIPES</h3>
            <div className="d-flex gap-2">
              <button className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px', border: '1px solid #E5DFD5' }}>
                <i className="fas fa-chevron-left" style={{ fontSize: '12px' }}></i>
              </button>
              <button className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px', border: '1px solid #E5DFD5' }}>
                <i className="fas fa-chevron-right" style={{ fontSize: '12px' }}></i>
              </button>
            </div>
          </div>

          <div className="row g-4">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="col-md-6">
                <div className="card h-100 border-0 position-relative" style={{ backgroundColor: 'transparent' }}>
                  <div className="position-relative overflow-hidden mb-3" style={{ borderRadius: '25px', height: '260px' }}>
                    <img src={recipe.image} alt={recipe.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    {recipe.isVegan && (
                      <div className="position-absolute bottom-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle text-center" 
                           style={{ backgroundColor: '#A3D96A', width: '45px', height: '45px', fontSize: '9px', fontWeight: 'bold', color: '#1B4314', lineHeight: '1.1' }}>
                        VEGAN<br/>VEGAN
                      </div>
                    )}
                  </div>

                  <div className="card-body p-0 d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="fw-bold mb-2" style={{ fontSize: '20px' }}>{recipe.title}</h4>
                      <p className="text-muted small lh-base mb-4" style={{ minHeight: '40px' }}>{recipe.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-2">
                      <span className="text-muted fw-bold" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>{recipe.meta}</span>
            
                      <button 
                        className="btn btn-outline-dark px-3 py-1 fw-bold" 
                        style={{ borderRadius: '15px', fontSize: '11px', borderColor: '#2B2B2B' }}
                        onClick={() => {
                          setSelectedRecipeId(recipe.id);
                          setCurrentPage('recipe-details');
                          window.scrollTo(0, 0);
                        }}
                      >
                        VIEW RECIPE
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="container pb-5">
        <div className="text-center text-white p-5 position-relative overflow-hidden" 
             style={{ 
               backgroundColor: '#FF6448', 
               borderRadius: '35px',
               backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
               backgroundSize: '40px 40px'
             }}>
          <div className="py-4 position-relative" style={{ zIndex: '2' }}>
            <span className="text-uppercase fw-bold d-block mb-2" style={{ fontSize: '12px', letterSpacing: '1px', opacity: '0.9' }}>SIGN UP</span>
            <h2 className="display-4 fw-black mb-3" style={{ fontWeight: '900', letterSpacing: '-1px' }}>JOIN THE FUN<br />CREATE ACCOUNT NOW!</h2>
            <p className="mx-auto mb-4 small" style={{ maxWidth: '500px', opacity: '0.85', lineHeight: '1.6' }}>Create an account to save your favorite recipes, share your own dishes, and enjoy a personalized cooking experience.</p>
             <button 
  className="btn bg-dark text-white px-4 py-2 fw-bold" 
  style={{ borderRadius: '20px', fontSize: '12px', letterSpacing: '0.5px' }}
  onClick={() => { setCurrentPage('login'); window.scrollTo(0, 0); }} 
>
  SIGN UP
</button>
          </div>
        </div>
      </section>

    </div>
  );
}