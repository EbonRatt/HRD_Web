import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [materials, setMaterials] = useState(learningMaterials);

  function handleClickStar(id) {
    const updatedMaterials = materials.map((material) =>
      material.id === id
        ? { ...material, isFavorite: !material.isFavorite }
        : material
    );
    setMaterials(updatedMaterials);
  }

  function getMaterials(sort) {
    let sortedMaterials;
    if (sort === "A-Z") {
      sortedMaterials = [...materials].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }
    if (sort === "Z-A") {
      sortedMaterials = [...materials].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }
    setMaterials(sortedMaterials);
  }

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] ">
      {/* calling filter component */}
      <FilterComponent getMaterials={getMaterials} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3 ">
        {materials.map((material) => (
          <div
            key={material.id}
            className="bg-light-gray px-4 py-2 flex gap-5 items-center "
          >
            <img
              src={material.image}
              alt="HTML5"
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{material.title}</p>
                <div
                  onClick={() => {
                    handleClickStar(material.id);
                  }}
                >
                  {material.isFavorite ? (
                    <Star size={20} fill="orange" stroke="orange" />
                  ) : (
                    <Star size={20} />
                  )}
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Posted at: {material.postedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
