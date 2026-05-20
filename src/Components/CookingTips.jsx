import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import rimg from '../img/Recipe Image.png';
import rimg2 from '../img/Recipe Image2.png';
import img1 from '../img/knif.png';
import img2 from '../img/food.png';
import img3 from '../img/rosting.png';
import img4 from '../img/prep work.png';
import img5 from '../img/cleaning.png';
import img6 from '../img/Recipe modifing.png';
import img7 from '../img/gluten free.png';
import img8 from '../img/plant.png';
import img9 from '../img/glassfood.png';
import img10 from '../img/fesh.png';
import img11 from '../img/Chossing.png'
import img12 from '../img/understandingfood.png';
import img13 from '../img/blacingfood.png';
import img14 from '../img/too salty.png';
import img15 from '../img/storge.png';
import icon from '../img/Icon.png';
import icon2 from '../img/Icon2.png';
import icon3 from '../img/Icon3.png'
 
const figmaFallbackData = {
  heroHeader: {
    mainTitle: "OUR ESSENTIAL COOKING TIPS",
    description: "Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures."
  },
  essentialTools: [
    { id: 1, icon: icon, title: "QUALITY TOOLS", desc: "Invest in high-quality knives, cutting boards, and cookware." },
    { id: 2, icon: icon2, title: "ESSENTIAL UTENSILS", desc: "Have a variety of utensils, including spatulas, tongs, and ladles." },
    { id: 3, icon: icon3, title: "MEASURING ACCURACY", desc: "Use measuring cups and spoons for precise ingredient quantities." }
  ],
  newestRecipes: [
    { id: 1, title: "Savory Herb-Infused Chicken", desc: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken.", time: "40 MIN", prep: "EASY PREP", serves: "3 SERVES",img:rimg2},
    { id: 2, title: "Decadent Chocolate Mousse", desc: "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!", time: "30 MIN", prep: "MEDIUM PREP", serves: "4 SERVES", img:rimg , isVegan: true }
  ],
  basicsTips: [
    { id: 1, title: "Knife Skills", desc: "Unlock the art of precision in your kitchen with proper chopping, dicing, and slicing techniques. Elevate your culinary creations to new heights.", time: "15 MIN", date: "01 JUN 23", img: img1 },
    { id: 2, title: "Sauteing and Searing", desc: "Achieve the perfect sear and elevate flavors in your dishes. Learn the secrets to sautéing like a pro and creating irresistible textures.", time: "20 MIN", date: "01 JUN 23", img: img2},
    { id: 3, title: "Roasting Tips", desc: "Ensure even cooking and unlock flavorful results with our expert roasting tips. From golden vegetables to succulent meats, master the art of roasting.", time: "25 MIN", date: "01 JUN 23", img: img3 },
    { id: 4, title: "Prep Workstations:", desc: "Efficiently organize your kitchen space for chopping, mixing, and cooking. Elevate your efficiency in the heart of your culinary domain.", time: "15 MIN", date: "01 JUN 23", img:img4},
    { id: 5, title: "Cleaning as You Go", desc: "Maintain a tidy kitchen for stress-free cooking. Learn the art of cleaning as you go, turning every culinary endeavor into a seamless experience.", time: "20 MIN", date: "01 JUN 23", img:img5 },
    { id: 6, title: "Recipe Modification", desc: "Feel confident modifying recipes to suit your taste. Explore the art of culinary creativity in crafting dishes uniquely your own.", time: "25 MIN", date: "01 JUN 23", img: img6 }
  ],
  nourishingTips: [
    { id: 1, title: "Gluten-Free Alternatives", desc: "Explore the world of gluten-free flours and grains, ensuring your dishes cater to a diverse range of dietary preferences.", time: "15 MIN", date: "01 JUN 23", img: img7},
    { id: 2, title: "Plant-Based Cooking", desc: "Delight in the realm of plant-based cooking with tips for crafting delicious vegetarian and vegan dishes.", time: "15 MIN", date: "01 JUN 23", img:img8  },
    { id: 3, title: "Allergy-Friendly Substitutions", desc: "Discover options for common allergens, ensuring everyone can savor the flavors of your culinary creations.", time: "15 MIN", date: "01 JUN 23", img: img9 }
  ],
  tipsAndTricks: [
    { id: 1, title: "Fresh vs. Dried Herbs", desc: "Discover the nuanced world of herbs. Learn when to opt for the freshness of herbs and when dried variants can amplify your culinary creations.", time: "15 MIN", date: "01 JUN 23", img:img10  },
    { id: 2, title: "Choosing Produce", desc: "Selecting ripe fruits and vegetables is an art. Explore our insights to ensure optimal taste in every dish.", time: "20 MIN", date: "01 JUN 23", img: img11 },
    { id: 3, title: "Understanding Spices", desc: "Enhance flavors by navigating the vast array of spices and seasonings. Uncover the secrets of creating dynamic taste profiles.", time: "25 MIN", date: "01 JUN 23", img: img12 },
    { id: 4, title: "Balancing Sweet and Savory", desc: "Achieve the perfect symphony of flavors by mastering the art of balancing sweet and savory elements in your dishes.", time: "15 MIN", date: "01 JUN 23", img: img13 },
    { id: 5, title: "Too Salty? Too Sweet? Fixing Seasoning Issues", desc: "Discover quick fixes for seasoning mishaps and ensure your dishes are perfectly balanced.", time: "20 MIN", date: "01 JUN 23", img: img14 },
    { id: 6, title: "Storage Solutions", desc: "Keep ingredients fresh and accessible with our storage solutions. Transform your kitchen into an organized oasis.", time: "25 MIN", date: "01 JUN 23", img: img15}
  ]
};


export default function CookingTips({ setCurrentPage, setSelectedRecipeId }) {
  const [heroHeader, setHeroHeader] = useState(null);
  const [essentialTools, setEssentialTools] = useState([]);
  const [newestRecipes, setNewestRecipes] = useState([]);
  const [basicsTips, setBasicsTips] = useState([]);
  const [nourishingTips, setNourishingTips] = useState([]);
  const [tipsAndTricks, setTipsAndTricks] = useState([]);
  const [loading, setLoading] = useState(true);

  // حالة (State) للمودال الخاص بالـ Read More للنصائح
  const [activeTip, setActiveTip] = useState(null);

  useEffect(() => {
    const fetchTipsData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.cooksdelight.com/v1/cooking-tips');
        if (response.data) {
          setHeroHeader(response.data.heroHeader || figmaFallbackData.heroHeader);
          setEssentialTools(response.data.essentialTools?.length ? response.data.essentialTools : figmaFallbackData.essentialTools);
          setNewestRecipes(response.data.newestRecipes?.length ? response.data.newestRecipes : figmaFallbackData.newestRecipes);
          setBasicsTips(response.data.basicsTips?.length ? response.data.basicsTips : figmaFallbackData.basicsTips);
          setNourishingTips(response.data.nourishingTips?.length ? response.data.nourishingTips : figmaFallbackData.nourishingTips);
          setTipsAndTricks(response.data.tipsAndTricks?.length ? response.data.tipsAndTricks : figmaFallbackData.tipsAndTricks);
        }
      } catch (error) {
        console.warn("API Error, falling back to local data:", error);
        setHeroHeader(figmaFallbackData.heroHeader);
        setEssentialTools(figmaFallbackData.essentialTools);
        setNewestRecipes(figmaFallbackData.newestRecipes);
        setBasicsTips(figmaFallbackData.basicsTips);
        setNourishingTips(figmaFallbackData.nourishingTips);
        setTipsAndTricks(figmaFallbackData.tipsAndTricks);
      } finally {
        setLoading(false);
      }
    };
    fetchTipsData();
  }, []);

  // دالة تشغيل أزرار الـ VIEW RECIPE ووصفات الـ DummyJSON
  const handleViewRecipe = (id) => {
    if(setSelectedRecipeId && setCurrentPage) {
      setSelectedRecipeId(id);
      setCurrentPage('recipe-details');
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#F7F4ED' }}>
        <div className="spinner-border text-warning" role="status"></div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F7F4ED', color: '#2B2B2B', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* ==================== 1. HERO HEADER SECTION ==================== */}
      {heroHeader && (
        <section className="container pt-5 pb-4">
          <div className="row align-items-start g-4">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold m-0" style={{ fontFamily: 'serif', letterSpacing: '-1px', lineHeight: '1.1' }}>
                {heroHeader.mainTitle}
              </h1>
            </div>
            <div className="col-lg-6">
              <p className="text-muted small lh-lg m-0 pt-2" style={{ maxWidth: '520px' }}>
                {heroHeader.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ==================== 2. ESSENTIAL TOOLS BOX ==================== */}
      <section className="container mb-5">
        <div className="bg-white p-4 border" style={{ borderRadius: '25px', borderColor: '#E5DFD5' }}>
          <div className="row g-4 justify-content-between">
            {essentialTools.map((tool, idx) => (
              <div key={tool.id} className={`col-md-4 ${idx !== essentialTools.length - 1 ? 'border-end' : ''}`}>
                <div className="d-flex align-items-center gap-3 px-2">
                  <div className="fs-3 text-dark">
                    <img src={tool.icon} alt="icon"></img>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 small" style={{ color: '#E9963F', letterSpacing: '0.5px' }}>{tool.title}</h6>
                    <p className="text-muted m-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>{tool.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. NEWEST RECIPES ==================== */}
      <section className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0" style={{ fontFamily: 'serif', fontSize: '2rem' }}>NEWEST RECIPES</h2>
        </div>

        <div className="row g-4">
          {newestRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-6">
              <div className="card h-100 border-0 bg-transparent position-relative">
                {recipe.isVegan && (
                  <span className="position-absolute badge rounded-circle p-2 bg-success text-white m-3" style={{ top: '10px', right: '10px', fontSize: '10px', zIndex: 10 }}>VEGAN</span>
                )}
               
                <img 
                  src={recipe.img || figmaFallbackData.newestRecipes.find(r => r.id === recipe.id)?.img} 
                  className="card-img-top" 
                  alt={recipe.title} 
                  style={{ borderRadius: '25px', height: '320px', objectFit: 'cover' }} 
                />
                <div className="card-body px-0 pt-3">
                  <h4 className="card-title fw-bold" style={{ fontFamily: 'serif' }}>{recipe.title}</h4>
                  <p className="card-text text-muted small lh-base">{recipe.desc}</p>
                  <div className="text-muted border-top pt-3 d-flex justify-content-between align-items-center" style={{ fontSize: '11px', fontWeight: 'bold' }}>
                    <span>{recipe.time} - {recipe.prep} - {recipe.serves}</span>
                    {/* 👇 تم ربط الزرار بالدالة لتشغيل صفحة التفاصيل */}
                    <button 
                      className="btn btn-sm btn-outline-dark rounded-pill px-3 fw-bold" 
                      style={{ fontSize: '11px' }}
                      onClick={() => handleViewRecipe(recipe.id)}
                    >
                      VIEW RECIPE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. MASTERING THE BASICS ==================== */}
      <section className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0" style={{ fontFamily: 'serif', fontSize: '2rem' }}>MASTERING THE BASICS</h2>
        </div>

        <div className="row g-4">
          {basicsTips.map((tip) => (
            <div key={tip.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 bg-white p-3" style={{ borderRadius: '25px' }}>
                <img 
                  src={tip.img || figmaFallbackData.basicsTips.find(t => t.id === tip.id)?.img} 
                  className="card-img-top" 
                  alt={tip.title} 
                  style={{ borderRadius: '20px', height: '220px', objectFit: 'cover' }} 
                />
                <div className="card-body px-0 pt-3 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold" style={{ fontFamily: 'serif' }}>{tip.title}</h5>
                    <p className="card-text text-muted small lh-base mb-4">{tip.desc}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-2">
                    <span className="text-muted" style={{ fontSize: '11px' }}>{tip.time} - {tip.date}</span>
                    <button 
                      className="btn btn-sm btn-outline-dark rounded-pill px-3 fw-bold" 
                      style={{ fontSize: '11px' }}
                      onClick={() => setActiveTip(tip)}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 5. NOURISHING EVERY PALATE ==================== */}
      <section className="container py-5 my-3" style={{ backgroundColor: '#D2E6F4', borderRadius: '35px' }}>
        <div className="px-3">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold m-0" style={{ fontFamily: 'serif', fontSize: '2rem' }}>NOURISHING EVERY PALATE</h2>
          </div>

          <div className="row g-4">
            {nourishingTips.map((tip) => (
              <div key={tip.id} className="col-md-4">
                <div className="position-relative overflow-hidden w-100" style={{ borderRadius: '25px', height: '400px' }}>
                  <img 
                    src={tip.img || figmaFallbackData.nourishingTips.find(t => t.id === tip.id)?.img} 
                    alt={tip.title} 
                    className="w-100 h-100" 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 d-flex flex-column justify-content-end text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))', height: '60%' }}>
                    <h5 className="fw-bold mb-2" style={{ fontFamily: 'serif' }}>{tip.title}</h5>
                    <p className="small text-white-50 lh-base mb-3" style={{ fontSize: '12px' }}>{tip.desc}</p>
                    <div className="d-flex justify-content-between align-items-center border-top border-secondary pt-2">
                      <span style={{ fontSize: '11px' }}>{tip.time} - {tip.date}</span>
                      <button 
                        className="btn btn-sm btn-outline-light rounded-pill px-3 fw-bold" 
                        style={{ fontSize: '11px' }}
                        onClick={() => setActiveTip(tip)}
                      >
                        READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. TIPS & TRICKS ==================== */}
      <section className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0" style={{ fontFamily: 'serif', fontSize: '2rem' }}>TIPS & TRICKS</h2>
        </div>

        <div className="row g-4">
          {tipsAndTricks.map((trick) => (
            <div key={trick.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 bg-white p-3" style={{ borderRadius: '25px' }}>
                <img 
                  src={trick.img || figmaFallbackData.tipsAndTricks.find(t => t.id === trick.id)?.img} 
                  className="card-img-top" 
                  alt={trick.title} 
                  style={{ borderRadius: '20px', height: '220px', objectFit: 'cover' }} 
                />
                <div className="card-body px-0 pt-3 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold" style={{ fontFamily: 'serif' }}>{trick.title}</h5>
                    <p className="card-text text-muted small lh-base mb-4">{trick.desc}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-2">
                    <span className="text-muted" style={{ fontSize: '11px' }}>{trick.time} - {trick.date}</span>
                    <button 
                      className="btn btn-sm btn-outline-dark rounded-pill px-3 fw-bold" 
                      style={{ fontSize: '11px' }}
                      onClick={() => setActiveTip(trick)}
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 7. JOIN THE FUN BANNER ==================== */}
      <section className="container pb-5">
        <div className="text-center text-white p-5 position-relative overflow-hidden" 
             style={{ 
               backgroundColor: '#FF6448', 
               borderRadius: '35px',
               backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
               backgroundSize: '40px 40px',
               zIndex: 1
             }}>
          <div className="py-4 position-relative" style={{ zIndex: 5 }}>
            <span className="text-uppercase fw-bold d-block mb-2" style={{ fontSize: '12px', letterSpacing: '1px', opacity: '0.9' }}>SIGN UP</span>
            <h2 className="display-4 fw-black mb-3" style={{ fontWeight: '900', letterSpacing: '-1px' }}>
              JOIN THE FUN<br />CREATE ACCOUNT NOW!
            </h2>
            <p className="mx-auto mb-4 small" style={{ maxWidth: '500px', opacity: '0.85', lineHeight: '1.6' }}>
              Create an account to save your favorite recipes, share your own dishes, and enjoy a personalized cooking experience.
            </p>
           <button 
  className="btn bg-dark text-white px-4 py-2 fw-bold" 
  style={{ 
    borderRadius: '20px', 
    fontSize: '12px', 
    letterSpacing: '0.5px', 
    position: 'relative',
    zIndex: 9999,          // رقم فلكي لضمان الارتفاع فوق أي شيء
    pointerEvents: 'auto',  // يجبر المتصفح على استقبال الضغطة مهما كانت الظروف
    cursor: 'pointer'
  }}
  onClick={(e) => { 
    e.preventDefault();
    e.stopPropagation(); // يمنع انتشار النقرة لأي عنصر أب (Parent) قد يعطلها
    
    console.log("=== SIGN UP CLICKED ===");
    console.log("Current props - setCurrentPage exists:", typeof setCurrentPage === 'function');

    if (setCurrentPage) {
      setCurrentPage('login'); 
      
      // تأخير السكروول ميلي ثانية واحدة لضمان قفز الصفحة بعد تحديث الـ DOM
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    } else {
      console.error("setCurrentPage prop is missing or not a function!");
    }
  }}
>
  SIGN UP
</button>
          </div>
        </div>
      </section>

      {/* ==================== Bootstrap Modal لعرض تفاصيل النصيحة الشاملة ==================== */}
      {activeTip && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1060 }}>
          {/* الـ Backdrop هنا يظهر فقط وفقط إذا كان المودال مفتوحاً */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setActiveTip(null)}></div>
          
          <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1061 }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 p-2" style={{ borderRadius: '25px', backgroundColor: '#F7F4ED' }}>
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fw-bold" style={{ fontFamily: 'serif' }}>{activeTip.title}</h5>
                  <button type="button" className="btn-close" onClick={() => setActiveTip(null)}></button>
                </div>
                <div className="modal-body text-center">
                  <img 
                    src={activeTip.img} 
                    alt={activeTip.title} 
                    className="img-fluid mb-3 w-100" 
                    style={{ borderRadius: '20px', maxHeight: '250px', objectFit: 'cover' }} 
                  />
                  <p className="text-muted text-start small lh-lg">{activeTip.desc}</p>
                  <div className="text-start border-top pt-2 mt-2">
                    <span className="badge bg-secondary-subtle text-dark small">{activeTip.time}</span>
                    <span className="badge bg-light text-muted ms-2 small">{activeTip.date || "01 JUN 23"}</span>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0">
                  <button type="button" className="btn btn-dark rounded-pill px-4 btn-sm fw-bold" onClick={() => setActiveTip(null)}>Got It!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
}