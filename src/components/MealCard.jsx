import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
`;

export default function MealCard({ meal }) {
  return (
    <Card>
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
    </Card>
  );
}
