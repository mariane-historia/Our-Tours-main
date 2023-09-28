import React, { useState } from "react";

const tours: React.FC = () => {
   const [items, clear] = useState([
      {
         id: 1,
         text1: "Best Of Paris In 7 Days Tour",
         text2: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
         imageUrl: "./images/tour-1.jpeg",
         price: "$1,995",
      },
      {
         id: 2,
         text1: "Best Of Ireland In 14 Days Tour",
         text2: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
         imageUrl: "./images/tour-2.jpeg",
         price: "$3,895",
      },
      {
         id: 3,
         text1: "Best Of Salzburg & Vienna In 8 Days Tour",
         text2: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
         imageUrl: "./images/tour-3.jpeg",
         price: "$2,695",
      },
      {
         id: 4,
         text1: "Best Of Rome In 7 Days Tour",
         text2: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
         imageUrl: "./images/tour-4.jpeg",
         price: "$2,095",
      },
      {
         id: 5,
         text1: "Best Of Poland In 10 Days Tour",
         text2: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
         imageUrl: "./images/tour-5.jpeg",
         price: "$2,595",
      },
   ]);

   const notInterested = (idToDelete) => {
      const updatedItems = items.filter((item) => item.id !== idToDelete);
      clear(updatedItems);
   };

   const [showMore, setShowMore] = useState(false);

   const toggleShowMore = () => {
      setShowMore(!showMore);
   };

   return (
      <>
         <div className="grid">
            <ul className="tour-list">
            <div className="title">
                     <h2>Our Tours</h2>
                     <div className="title-underline"></div>
                  </div>
               <div className="tour-container">
                  
                  {items.map((item) => (
                     <li key={item.id} className="list-item">
                        <img src={item.imageUrl} alt="Item" />
                        <div className="item-info">
                           <p className="text1">{item.text1}</p>
                           
                           <p className="text2">
                              {showMore
                                 ? item.text2
                                 : item.text2.slice(0, 230) +
                                   (item.text2.length > 80 ? "..." : "")}
                              {item.text2.length > 80 && (
                                 <button
                                    className="btn1"
                                    onClick={toggleShowMore}>
                                    {showMore ? "Show Less" : "Show More"}
                                 </button>
                              )}
                           </p>

                           <div>
                              <button
                                 className="btn2"
                                 onClick={() => notInterested(item.id)}>
                                 Not Interested
                              </button>
                           </div>
                           <span className="tour-price">{item.price}</span>
                        </div>
                     </li>
                  ))}
               </div>
            </ul>
         </div>
      </>
   );
};

export default tours;
