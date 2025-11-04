import React, { useState } from "react";
import ProgressBar from "./progressBar";


const FoodStory = ({ storyImages }) => {
  const [storyIndex, setStoryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIngredient, setActiveIngredient] = useState(null);

  const currentStory = storyImages[storyIndex];

  const nextStory = () => {
    setStoryIndex((prev) =>
      prev < storyImages.length - 1 ? prev + 1 : 0
    );
  };

  const prevStory = () => {
    setStoryIndex((prev) =>
      prev > 0 ? prev - 1 : storyImages.length - 1
    );
  };

  const handleTap = (e) => {
    if (activeIngredient) return; // disable tap when card open
    
    const clickX = e.nativeEvent.offsetX;
    const width = e.target.clientWidth;
    const percentage = (clickX / width) * 100;

    if (percentage < 30) return prevStory();
    if (percentage > 70) return nextStory();
    
    setIsPaused((p) => !p);
  };

  const openIngredient = (ingredient) => {
    setActiveIngredient(ingredient);
    setIsPaused(true);
  };

  const closeIngredient = () => {
    setActiveIngredient(null);
    setIsPaused(false);
  };

  return (
    <div style={{ width: "80vw", margin: "10px auto", position: "relative" }}>
      
      <div onClick={handleTap} style={{ 
    position: "relative",   // ✅ required
    width: "100%",
    height: "70vh",
    borderRadius: "12px",
    overflow: "hidden"
  }}>
      <ProgressBar duration={5000} onComplete={nextStory} isPaused={isPaused} />
        <img
          src={currentStory.url}
          alt=""
          style={{ 
    width: "100%", 
    height: "100%", 
    objectFit: "cover"
  }}
        />

        {currentStory.hotspots?.map((h, i) => (
          <div
            key={i}
            className="pulse-dot"
            
            onClick={(e) => { e.stopPropagation(); openIngredient(h.ingredient); }}
          >
            <p style={{fontWeight:"bold", fontSize:"1.5rem"}}>...</p>
          </div>
        ))}
      </div>

    

     
      {activeIngredient && (
        <div
          onClick={closeIngredient}
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "10px"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "95%",
              background: "#fff",
              borderRadius: "16px",
              padding: "12px",
              animation: "slideUp .25s ease",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src={activeIngredient.img} alt="" style={{ width: 55, height: 55, borderRadius: 10, objectFit: "cover" }} />
              <div>
                <h3 style={{ margin: 0 }}>{activeIngredient.name}</h3>
                <p style={{ fontSize: 12, opacity: .8 }}>{activeIngredient.calories}</p>
                <p style={{ fontSize: 12 }}>{activeIngredient.macros}</p>
                <p style={{ fontSize: 12, color: "red" }}>{activeIngredient.allergen}</p>
              </div>
            </div>

            <button style={{ marginTop: 10, width: "100%", padding: 8, borderRadius: 8 }}>Customize</button>
            <button style={{ marginTop: 6, width: "100%", padding: 8, borderRadius: 8 }}>
              Add Extra {activeIngredient.priceExtra}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FoodStory;
