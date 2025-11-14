import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const PetCard = ({ pet }) => {
  const handleViewDetails = () => {
    alert(`Viewing details for ${pet.name}`);
  };

  return (
    <Card className="overflow-hidden shadow-md rounded-2xl">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{pet.name}</h2>
          <Badge>{pet.type}</Badge>
        </div>
        <p className="text-gray-600 text-sm mb-2">{pet.breed}</p>
        <p className="text-gray-500 text-sm mb-4">Age: {pet.age} years</p>
        <Button onClick={handleViewDetails} className="w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PetCard;
